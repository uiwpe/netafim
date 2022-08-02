import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { WeatherService } from '@service/weather.service'
import { Observable, tap } from 'rxjs'

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
  constructor(private weather: WeatherService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: req.headers.set('Session', '123456789')
    })

    return next
      .handle(authReq)
      .pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse)
              console.log('Server response')
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status == 401)
                console.log('Unauthorized')
            }
          }
        )
      )
  }
}
