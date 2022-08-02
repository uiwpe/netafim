import { Component, OnDestroy, OnInit } from '@angular/core'
import { LocationService } from '@service/location.service'
import { WeatherService } from '@service/weather.service'

@Component({
  selector: 'tt-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  forecast: boolean = false

  constructor(public weather: WeatherService, public location: LocationService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  toggle(forecast: boolean) {
    if (this.coords) {
      this.forecast = !forecast
    }
  }

  get coords(): boolean {
    const {lat, lon} = this.location.location
    return !!lat && !!lon
  }
}
