import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Images } from './images';
import {throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable()
export class APIService {

  private _url: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http:HttpClient) { }

  getImages(): Observable<Images[]>{
    return this.http.get<Images[]>(this._url)
                    .pipe(tap(data => JSON.stringify(data)) ,catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
