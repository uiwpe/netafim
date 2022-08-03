import { Injectable } from '@angular/core'
import { Timestamp } from '@model/weather.model'

export type Lat = number
export type Lon = number

export interface Location {
  lat: Lat
  lon: Lon
  offset: number
  name?: string
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  date: Timestamp = Date.now()
  location: Location = {lat: 0, lon: 0, offset: 0}

  constructor() {
  }

  save(location: Location) {
    this.location = location
  }

  get coordinates(): Location {
    return {...this.location}
  }

  get offset(): number {
    return this.location.offset
  }
}
