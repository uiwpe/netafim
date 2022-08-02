import { Injectable } from '@angular/core'

export type Profile = string

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  current: Profile = 'NC'

  constructor() {
  }
}
