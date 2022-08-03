import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LocationService } from '@service/location.service'
import * as moment from 'moment'
import { BehaviorSubject, forkJoin, map, Subject, tap } from 'rxjs'
import { environment } from '@env/environment'
import { CurrentWeather, DailyWeather, HistoryWeather, Temperature } from '@model/weather.model'

export type Units = 'standard' | 'metric' | 'imperial'

export type ForecastIcon = string

export interface Weather {
  date: number
  temp: Temperature
  clouds: Temperature
  icon: ForecastIcon
}

type Part = 'current'
  | 'minutely'
  | 'hourly'
  | 'daily'
  | 'alerts'

export type Forecast = DailyWeather[]

const emptyWeather: Weather = {
  date: Date.now(),
  icon: 'unknown',
  clouds: '-',
  temp: '-'
}

const parts: Part[] = [
  'current', 'minutely', 'hourly', 'daily', 'alerts'
]

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  units: Units = 'metric'

  yesterday$: Subject<HistoryWeather> = new Subject<HistoryWeather>()
  weather$: Subject<CurrentWeather> = new Subject<CurrentWeather>()
  forecast$: Subject<Forecast> = new BehaviorSubject<Forecast>([])

  constructor(private http: HttpClient, private location: LocationService) {
  }

  oneCall(include: Part) {
    return this.http.get(this.append(environment.API.url) + this.include(include))
      .pipe(map((response: any) => response[include]))
  }

  include(part: Part) {
    return `&exclude=${parts.filter(p => p !== part).join(',')}`
  }

  getYesterday() {
    const date = moment().subtract(1, 'days')
    const url = `${environment.API.url}/timemachine${this.append()}&dt=${date.unix()}`
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          return response['data'][0]
        }),
        tap(weather => {
          this.yesterday$.next(weather)
        })
      )
  }

  getWeather() {
    const part: Part = 'current'
    return this.oneCall(part)
      .pipe(
        map((current: CurrentWeather) => current),
        tap((weather: CurrentWeather) => {
          this.weather$.next(weather)
        })
      )
  }

  getForecast() {
    const part: Part = 'daily'
    return this.oneCall(part)
      .pipe(
        map((response: DailyWeather[]) => response.slice(0, 6)),
        tap((forecast) => {
          this.forecast$.next(forecast)
        })
    )
  }

  append(path: string = '') {
    const {lat, lon} = this.location.coordinates
    return path + `?lat=${lat}&lon=${lon}&appid=${environment.API.appid}&units=${this.units}`
  }

  loadData() {
    return forkJoin([this.getYesterday(), this.getWeather(), this.getForecast()])
      .subscribe(list => {
        console.log({list})
      })
  }
}
