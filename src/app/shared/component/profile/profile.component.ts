import { Component, OnInit } from '@angular/core'
import { ProfileService } from '@service/profile.service'

@Component({
  selector: 'tt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public profile: ProfileService) {
  }

  ngOnInit(): void {
  }

}
