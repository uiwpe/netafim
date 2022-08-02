import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'
import { BarChart2, Droplet, Feather, Repeat, Search, Smartphone, Watch, X } from 'angular-feather/icons'

const icons = {
  Search, Watch, Droplet, X, Smartphone, Feather, Repeat, BarChart2
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule {
}
