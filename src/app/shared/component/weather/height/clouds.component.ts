import { Component, Input, OnInit } from '@angular/core'
import { Temperature } from '@model/weather.model'

@Component({
  selector: 'tt-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent implements OnInit {
  @Input() clouds: Temperature = '-'
  @Input() unit: string = '%'

  constructor() {
  }

  ngOnInit(): void {
  }

}
