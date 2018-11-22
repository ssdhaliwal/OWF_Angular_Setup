import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

import { PreferencesModel, Preference } from '../models/preferences-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PreferencesService {
  private baseUrl = 'assets/attributes.json';

  constructor(private http: HttpClient) {

  }

  getPreferences(namespace: string, category: string) {
    let values = this.http
      .get<PreferencesModel[]>(this.baseUrl, { responseType: 'json' })
      .pipe(
        map(data => _.values(data)),
        catchError(this.handleError('getAttribute', [])),
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
