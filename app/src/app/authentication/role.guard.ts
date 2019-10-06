import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../alert/alert.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _alertService: AlertService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this._authService.isNurse()) {
      this._alertService.error('This page is only accessible by nurses', true);
      this._router.navigateByUrl('/home');
      return false;
    }
    return true;
  }
}
