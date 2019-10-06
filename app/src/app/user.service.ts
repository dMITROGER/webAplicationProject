import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Motivation, VitalSigns } from './app.interface';

@Injectable()
export class UserService {
  private _usersBaseURL = '/api/users';
  private _motivationBaseURL = '/api/motivations';
  private _vitalSignsBaseURL = '/api/vitalSigns';

  constructor(
    private _authService: AuthenticationService,
    private _http: HttpClient) { }

  public listUsers(): Observable<any> {
    return this._http
      .get(this._usersBaseURL)
      .map(res => res)
      .catch(this.handleError);
  }
  public getUser(id: any): Observable<any> {
    return this._http
      .get(this._usersBaseURL + '/' + id)
      // .map((res: Response) => res.json())
      .map(res => res)
      .catch(this.handleError);
  }

  // SHARED FUNCTIONALITIES
  // Create vital signs record
  public enterVitalSigns(vitalSigns: VitalSigns): Observable<any> {
    return this._http
      .post(this._vitalSignsBaseURL, vitalSigns)
      .map(res => res)
      .catch(this.handleError);
  }

  // NURSE FUNCTIONALITIES
  // CRUD motivation
  // prioritize create first
  public sendMotivation(motivation: Motivation): Observable<any> {
    return this._http
      .post(this._motivationBaseURL, motivation)
      .map(res => res)
      .catch(this.handleError);
  }

  // PATIENT FUNCTIONALITIES
  // Read motivation

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error.message || 'Server error');
  }
}
