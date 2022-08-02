import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'tt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name: string = 'unknown'
  @Input() width: number = 42
  @Input() height: number = 42

  constructor() {
  }

  ngOnInit(): void {
  }

}
