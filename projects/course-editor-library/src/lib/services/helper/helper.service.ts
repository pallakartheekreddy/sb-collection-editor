import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap, tap, mergeMap, filter, first, skipWhile } from 'rxjs/operators';
import * as _ from 'lodash-es';
import { DataService } from '../index';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private availableLicenses: Array<any>;
  constructor(private dataService: DataService) { }

  initialize() {
    this.getLicenses().subscribe();
  }
  getLicenses(): Observable<any> {
    const req = {
      url: `composite/v3/search`,
      data: {
        request: {
          filters: {
            objectType: 'license',
            status: ['Live']
          }
        }
      }
    };
    return this.dataService.post(req).pipe(map((res: any) => {
      return res.result;
    }), tap((data: any) => this.availableLicenses = _.get(data, 'license')), catchError(err => {
      const errInfo = { errorMsg: 'search failed' };
      return throwError(errInfo);
    }));
  }

  getAvailableLicenses() {
    return this.availableLicenses;
  }
}
