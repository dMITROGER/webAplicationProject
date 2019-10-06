import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmergencyAlertsService {
  private _baseURL = '/api/users';
  private _emergURL = '/api/emergency';

  constructor(

    private _http: HttpClient) { }

  public listUsers(): Observable<any> {
    return this._http
      .get(this._baseURL)
      .map(res => res)
      .catch(this.handleError);
  }

  public submitAlert(alert: any): Observable<any> {
    return this._http
      .post(this._emergURL, alert)
      .map(res => res)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error.message || 'Server error');
  }

}
