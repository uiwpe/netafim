import { Component, Input, OnInit } from '@angular/core'

export interface Route {
  url: string[]
  icon: string
}

@Component({
  selector: 'tt-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() routes: Route[] = []
  @Input() prefix: string = '/'

  constructor() {
  }

  ngOnInit(): void {
  }

}
