import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentModule } from '@component/component.module'
import { LayoutModule } from '@layout/layout.module'
import { PageModule } from '@page/page.module'
import { IconsModule } from './icons/icons.module'

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,

  ComponentModule,
  LayoutModule,
  IconsModule,
  PageModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class SharedModule {
}
