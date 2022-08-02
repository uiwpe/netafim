import { Injectable } from '@angular/core'

export interface Location {
  lat: number
  lon: number
  name?: string
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location: Location = {lat: 0, lon: 0}

  constructor() {
  }

  save(location: Location) {
    this.location = location
  }

  get coordinates(): Location {
    const {lat, lon} = this.location
    return {lat, lon}
  }
}
