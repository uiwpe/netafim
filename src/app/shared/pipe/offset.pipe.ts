import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
  name: 'offset'
})
export class OffsetPipe implements PipeTransform {
  transform(value: number | null, offset: number): number {
    if (!value) {
      return 0
    }
    if (!offset) {
      return value
    }
    return moment(value)
      .utcOffset(offset, true)
      .valueOf()
  }

}
