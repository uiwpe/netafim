import { Component, OnInit } from '@angular/core'
import { Route } from '@layout/nav/nav.component'
import { Location, LocationService } from '@service/location.service'
import { WeatherService } from '@service/weather.service'

@Component({
  selector: 'tt-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  now: Date = new Date()
  dateFormat: string = 'EEE dd MMM'
  timeFormat: string = 'hh:mm aaa'

  routes: Route[] = [
    {
      url: ['farm'],
      icon: 'feather'
    },
    {
      url: ['irrigation'],
      icon: 'droplet'
    },
    {
      url: ['recycling'],
      icon: 'repeat'
    },
    {
      url: ['devices'],
      icon: 'smartphone'
    },
    {
      url: ['statistics'],
      icon: 'bar-chart-2'
    }
  ]
  routePrefix: string = '/system/'

  constructor(private location: LocationService,
              private weather: WeatherService) {
  }

  ngOnInit() {
  }

  locationChanged(location: Location) {
    this.location.save(location)
    this.weather.loadData()
  }
}
