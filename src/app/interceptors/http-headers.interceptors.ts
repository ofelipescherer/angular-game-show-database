import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        "x-rapidapi-key": "f62bbf0a03msh78000866d8e024dp125b8bjsnc89480c356cc",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      },
      setParams: {
        key: 'f725c746b8b64a828520a1c74d9347c5',
      }
    });
    return next.handle(req);
  }
}