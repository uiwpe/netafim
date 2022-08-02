import { Component, Input, OnInit } from '@angular/core'
import { Units } from '@service/weather.service'
import { Temperature } from '@model/weather.model'

@Component({
  selector: 'tt-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  @Input() temperature: Temperature | undefined = '-'
  @Input() units: Units = 'metric'

  @Input() size: string = '1em'
  constructor() { }

  ngOnInit(): void {
  }

}
