import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'

const sharedPages = [
  NotFoundComponent
]

@NgModule({
  declarations: [
    ...sharedPages
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...sharedPages
  ]
})
export class PageModule {
}
