import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentModule } from '@component/component.module'
import { LayoutModule } from '@layout/layout.module'
import { PageModule } from '@page/page.module'
import { OffsetPipe } from '@pipe/offset.pipe'
import { IconsModule } from './icons/icons.module'


const sharedModules = [
  FormsModule,
  ReactiveFormsModule,

  ComponentModule,
  LayoutModule,
  IconsModule,
  PageModule
]

const sharedPipes = [
  OffsetPipe
]

@NgModule({
  declarations: [
    ...sharedPipes
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules,
    ...sharedPipes
  ]
})
export class SharedModule {
}
