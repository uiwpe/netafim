import { Pipe, PipeTransform } from '@angular/core'
import { Timestamp } from '@model/weather.model'
import * as moment from 'moment'

@Pipe({
  name: 'offset'
})
export class OffsetPipe implements PipeTransform {
  transform(value: Timestamp | number, offset: number): Timestamp | number {
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
