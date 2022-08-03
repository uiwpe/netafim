import { Lat, Lon } from '@service/location.service'

type WeatherTitle = string // TODO:

export type Pressure = number | string
export type Temperature = number | '-'

type WeatherIcon =
  '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n'
  | 'unknown'

interface Weather {
  id: number,
  main: WeatherTitle,
  description: string,
  icon: WeatherIcon
}

export interface CurrentWeather {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  feels_like: Temperature
  pressure: Pressure
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: Weather[]
}

export interface HistoryWeather extends CurrentWeather {
  history?: boolean
}

interface DailyTemp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

interface FeelsLikeTemp {
  day: number
  night: number
  eve: number
  morn: number
}

export interface DailyWeather {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: DailyTemp
  feels_like: FeelsLikeTemp
  pressure: Pressure
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
  clouds: number
  pop: number
  rain: number
  uvi: number
}

export interface WeatherModel {
  lat: Lat,
  lon: Lon,
  timezone: string,
  timezone_offset: number,
  current?: CurrentWeather,
  daily?: DailyWeather[]
}
