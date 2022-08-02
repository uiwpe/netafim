import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NotFoundComponent } from './not-found/not-found.component'

const sharedPages = [
  NotFoundComponent
]

@NgModule({
  declarations: [
    ...sharedPages
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedPages
  ]
})
export class PageModule {
}
