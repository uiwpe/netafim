import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LocationService } from '@service/location.service'
import { BehaviorSubject, forkJoin, map, tap } from 'rxjs'
import { environment } from '@env/environment'
import { Temperature, Timestamp, WeatherModel } from '@model/weather.model'

export type Units = 'standard' | 'metric' | 'imperial'

export type ForecastIcon = string

export interface Weather {
  date: Timestamp
  temp: Temperature
  clouds: Temperature
  icon: ForecastIcon
  main?: string
  description?: string

  min?: Temperature
  max?: Temperature
}

export type Forecast = Weather[]

const emptyWeather: Weather = {
  date: Date.now(),
  icon: 'unknown',
  clouds: '-',
  temp: '-'
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  units: Units = 'metric'

  weather: BehaviorSubject<Weather> = new BehaviorSubject<Weather>(emptyWeather)
  forecast: BehaviorSubject<Forecast> = new BehaviorSubject<Forecast>([emptyWeather])

  constructor(private http: HttpClient, private location: LocationService) {
  }

  getWeather() {
    return this.http.get(this.append(`${environment.API.weather}`))
      .pipe(
        map((response: any): Weather => {
          return this.transform(response)
        }),
        tap((forecast) => {
          this.weather.next(forecast)
        }))
  }

  getForecast() {
    return this.http.get(this.append(`${environment.API.forecast}`))
      .pipe(
        map((response: any): WeatherModel[] => response.list),
        map((list: WeatherModel[]): Forecast => list.map(item => this.transform(item, true))),
        map((forecast: Forecast) => {
          return this.groupByDate(forecast)
        }),
        tap((forecast) => {
          this.forecast.next(forecast)
        }))
  }

  transform(input: WeatherModel, forecast: boolean = false): Weather {
    const {temp, temp_min, temp_max} = input.main
    const [min, max] = [temp_min, temp_max]
    const clouds = input.clouds.all
    const {icon, main, description} = input.weather[0]
    const date = !forecast ? Date.now() : +input.dt * 1000
    return {
      date,

      temp,
      clouds,
      icon,

      main,
      description,

      min, max
    }
  }

  groupByDate(forecast: Forecast): Forecast {
    // return forecast.reduce((acc, current) => {
    //   const key = moment(current.date).date()
    //   acc[key] = acc[key] || []
    //   acc[key].push(current)
    //   return acc
    // }, Object.create({}))
    return forecast
  }

  minMax(input: any): any {
    return Object.keys(input).map((key: any) => {
      console.log(input[key])
      const min = Math.min(...input[key].map((item: any) => item.temp))
      const max = Math.max(...input[key].map((item: any) => item.temp))
      return {
        ...input[key],
        min,
        max
      }
    })
  }

  // getHistory() {
  //   return this.http.get(this.expand(`${environment.API.history}?`))
  // }

  append(path: string) {
    const {lat, lon} = this.location.coordinates
    return path + `?lat=${lat}&lon=${lon}&appid=${environment.API.appid}&units=${this.units}`
  }

  loadData() {
    return forkJoin([this.getWeather(), this.getForecast()])
      .pipe(
        map((a) => {
          console.log(a)
        })
      )
      .subscribe(response => {
        // console.log({response})
      })
  }
}
