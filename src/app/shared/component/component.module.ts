import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ListComponent } from '@component/weather/list/list.component'
import { TempComponent } from '@component/weather/temp/temp.component'
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'
import { IconsModule } from '../icons/icons.module'
import { DateComponent } from './date/date.component'
import { DropdownComponent } from './dropdown/dropdown.component'
import { LocationComponent } from './location/location.component'
import { ProfileComponent } from './profile/profile.component'
import { IconComponent } from './weather/icon/icon.component'
import { WeatherComponent } from './weather/weather.component';
import { CloudsComponent } from './weather/height/clouds.component'

const sharedComponents = [
  DateComponent,
  ProfileComponent,
  LocationComponent,
  DropdownComponent,
  //
  WeatherComponent,
  ListComponent,
  IconComponent,
  TempComponent,
  CloudsComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    IconsModule,
    GooglePlaceModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class ComponentModule {
}
