import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

import { ConfigModel } from '../models/config-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConfigService {
  config: Observable<ConfigModel>;
  private baseUrl = 'assets/config.json';

  constructor(private http: HttpClient) {

  }

  getConfig() {
    this.config = this.http
      .get<ConfigModel>(this.baseUrl, { responseType: 'json' })
      .pipe(
        catchError(this.handleError('getConfig', [])),
        tap(console.log));

    return this.config;
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
