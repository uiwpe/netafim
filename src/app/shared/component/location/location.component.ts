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
    const location: Location = {
      lat: address.geometry.location.lat(),
      lon: address.geometry.location.lng(),
      offset: address.utc_offset_minutes
    }
    console.log(location)
    this.locationChanged.emit(location)
  }

  clear() {
    this.address = this.input.nativeElement.value = ''
    this.locationChanged.emit({
      lat: 0,
      lon: 0,
      offset: 0
    })
  }
}
