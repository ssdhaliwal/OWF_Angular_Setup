import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

import { ConfigModel } from '../models/config-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: Observable<ConfigModel> = null;
  private baseUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
    this.retrieveConfig();
  }

  private retrieveConfig(): void {
    this.config = this.http
      .get<ConfigModel>(this.baseUrl, { responseType: 'json' })
      .pipe(
        catchError(this.handleError('retrieveConfig', [])),
        tap(console.log));
  }

  getConfig() {
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
