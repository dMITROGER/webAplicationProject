import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class SymptomCheckerService {
  private _symptomURL = '/api/symptomchecker';

  constructor(

    private _http: HttpClient) { }

  public getMedicalConditions(symptoms: any): Observable<any> {
    return this._http
      .post(this._symptomURL, symptoms)
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error.message || 'Server error');
  }

}
