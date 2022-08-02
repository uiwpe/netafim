import { Injectable } from '@angular/core'
import { Timestamp } from '@model/weather.model'
import * as moment from 'moment'

export interface Location {
  lat: number
  lon: number
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
    const {lat, lon, offset} = this.location
    return {lat, lon, offset}
  }

  get offset(): number {
    return this.location.offset
  }
}
