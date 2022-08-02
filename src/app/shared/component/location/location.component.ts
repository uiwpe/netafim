import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { Location } from '@service/location.service'


@Component({
  selector: 'tt-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  address: string = ''

  @ViewChild('inputElement', {static: true}) input!: ElementRef<HTMLInputElement>

  @Output() locationChanged: EventEmitter<Location> = new EventEmitter<Location>()

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddressChange(address: any) {
    this.address = address.name
    this.locationChanged.emit({
      lat: address.geometry.location.lat(),
      lon: address.geometry.location.lng()
    })
  }

  clear() {
    this.address = this.input.nativeElement.value = ''
    this.locationChanged.emit({
      lat: 0,
      lon: 0
    })
  }
}
