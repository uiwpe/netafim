import { Component, Input, OnInit } from '@angular/core'
import { Timestamp } from '@model/weather.model'

@Component({
  selector: 'tt-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() format: string = ''
  @Input() date!: Date | Timestamp

  constructor() {
  }

  ngOnInit(): void {
  }

}
