import { Component, Input} from '@angular/core'

@Component({
  selector: 'tt-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  @Input() format: string = ''
  @Input() date!: Date | number

  constructor() {
  }
}
