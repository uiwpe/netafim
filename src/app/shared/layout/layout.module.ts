import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IconsModule } from '../icons/icons.module'
import { HeaderComponent } from './header/header.component'
import { LogoComponent } from './logo/logo.component'
import { NavComponent } from './nav/nav.component'
import { SidebarComponent } from './sidebar/sidebar.component'

const sharedLayout = [
  HeaderComponent,
  SidebarComponent,
  NavComponent,
  LogoComponent
]

@NgModule({
  declarations: [
    ...sharedLayout
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    ...sharedLayout
  ]
})
export class LayoutModule {
}
