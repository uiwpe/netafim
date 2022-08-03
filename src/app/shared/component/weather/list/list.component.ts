import { Component, OnInit } from '@angular/core'
import { ForecastIcon, WeatherService } from '@service/weather.service'

interface WeatherRow {
  date: Date | string
  icon: ForecastIcon
  min: number
  max: number
  rain: number
  ET?: number
}

@Component({
  selector: 'tt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  rows: WeatherRow[] = []

  cols: string[] = [
    '', '', '', '', 'Min/Max', 'Clouds'
  ]

  dateFormat: string = 'EEE | dd MMM'

  constructor(public weather: WeatherService) {
  }

  ngOnInit(): void {
  }

}
