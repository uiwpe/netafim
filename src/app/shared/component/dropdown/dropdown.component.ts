import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'tt-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() visible: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

}
