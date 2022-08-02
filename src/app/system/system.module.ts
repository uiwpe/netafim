import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { DevicesComponent } from './page/devices/devices.component'
import { FarmComponent } from './page/farm/farm.component'
import { IrrigationComponent } from './page/irrigation/irrigation.component'
import { RecyclingComponent } from './page/recycling/recycling.component'
import { StatisticsComponent } from './page/statistics/statistics.component'

import { SystemRoutingModule } from './system-routing.module'
import { SystemComponent } from './system.component'


@NgModule({
  declarations: [
    SystemComponent,
    // PAGES
    FarmComponent,
    IrrigationComponent,
    RecyclingComponent,
    DevicesComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ]
})
export class SystemModule {
}
