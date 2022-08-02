import { Injectable } from '@angular/core'

export type Profile = string

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  current: Profile = 'Nyan Cat'

  constructor() {
  }

  get initials() {
    return this.current.split(' ').map(name => name[0]).join('')
  }
}
