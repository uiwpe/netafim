import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DevicesComponent } from './page/devices/devices.component'
import { FarmComponent } from './page/farm/farm.component'
import { IrrigationComponent } from './page/irrigation/irrigation.component'
import { RecyclingComponent } from './page/recycling/recycling.component'
import { StatisticsComponent } from './page/statistics/statistics.component'
import { SystemComponent } from './system.component'

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        redirectTo: 'farm',
        pathMatch: 'full'
      },
      {
        path: 'farm',
        component: FarmComponent
      },
      {
        path: 'irrigation',
        component: IrrigationComponent
      },
      {
        path: 'recycling',
        component: RecyclingComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
