import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import * as _ from 'lodash-es';
import { PublicDataService } from '../index';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private _availableLicenses: Array<any>;
  constructor(private publicDataService: PublicDataService) { }

  initialize(defaultLicense?: any) {
    if (defaultLicense) {
      this._availableLicenses = defaultLicense;
    } else {
      this.getLicenses().subscribe();
    }
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
    return this.publicDataService.post(req).pipe(map((res: any) => {
      return res.result;
    }), tap((data: any) => this._availableLicenses = _.get(data, 'license')), catchError(err => {
      const errInfo = { errorMsg: 'search failed' };
      return throwError(errInfo);
    }));
  }

  getAvailableLicenses() {
    return this._availableLicenses;
  }

  public uniqueId(length = 32) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

  public getTimeSpentText(pdfPlayerStartTime) {
      const duration = new Date().getTime() - pdfPlayerStartTime;
      const minutes = Math.floor(duration / 60000);
      const seconds = Number(((duration % 60000) / 1000).toFixed(0));
      return (minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
  }
}
