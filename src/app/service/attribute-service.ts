import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

import { AttributeModel } from '../models/attribute-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AttributeService {
  private baseUrl = 'assets/attributes.json';

  constructor(private http: HttpClient) {

  }

  getConfig() {
    let values = this.http
      .get<AttributeModel[]>(this.baseUrl, { responseType: 'json' })
      .pipe(
        map(data => _.values(data)),
        catchError(this.handleError('getConfig', [])),
        tap(console.log));
    return values;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
