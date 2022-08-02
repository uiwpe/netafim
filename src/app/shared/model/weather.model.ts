type WeatherTitle = string | 'Clouds' // TODO:
type Base = string | 'stations' // TODO:

type Code = number // 200, 300, 400
type Message = number
type Count = number

export type Timestamp = number
export type Temperature = number | '-'
type Timezone = number
type CountryName = string
type CityName = string

interface City {
  id: number
  name: CityName
  coord: Location
  country: CountryName
  population: number
  timezone: Timezone
  sunrise: Timestamp
  sunset: Timestamp
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface Wind {
  speed: number
  deg: number
}

interface Clouds {
  all: number
}

interface WeatherSys {
  type: number
  id: number
  country: CountryName
  sunrise: Timestamp
  sunset: Timestamp
}

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

export interface WeatherModel {
  coord: Location
  weather: Weather[]
  base: Base
  main: Main
  visibility: number,
  wind: Wind,
  clouds: Clouds,
  dt: Timestamp,
  sys: WeatherSys,
  timezone: Timezone,
  id: number,
  name: CityName,
  cod: Code
}

export interface ForecastModel {
  cod: Code
  message: Message
  cnt: Count
  list: WeatherModel[],
  city: City
}
