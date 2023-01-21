import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Auth } from '@app/models/Auth';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  login(email: string, password: string) {
    // return this.http.post<any>(`${environment.apiUrl}/auth`, { email, password })
    //   .pipe(map(auth => {
    //     // login successful if there's a jwt token in the response
    //     if (auth && auth.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentAuth', JSON.stringify(auth));
    //       this.currentAuthSubject.next(auth);

    //       // set auth for ember
    //       const emberAuth = {
    //         authenticated: {
    //           authenticator: 'authenticator:custom',
    //           token: auth.token
    //         }
    //       };
    //       localStorage.setItem('ember_simple_auth-session', JSON.stringify(emberAuth));
    //     }

    return true;
    // }));
  }

  logout() {
    localStorage.removeItem('currentAuth');
  }
}
