import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private validLogins = new Map<string, string>();
  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor() {
    const lsValidLogins = JSON.parse(
      localStorage.getItem('gaggleValidLogins') ?? '{}'
    );

    if (!lsValidLogins || Object.keys(lsValidLogins).length === 0) {
      this.validLogins.set('sampleuser', 'password1');
      this.validLogins.set('sampleuser2', 'password2');
      this.validLogins.set('sampleuser3', 'password3');

      localStorage.setItem(
        'gaggleValidLogins',
        JSON.stringify([...this.validLogins.entries()])
      );
    } else {
      lsValidLogins.forEach((credentials: string[]) =>
        this.validLogins.set(credentials[0], credentials[1])
      );
    }

    const lsAuth = localStorage.getItem('gaggleAuth');
    const validAuth = this.validLogins.has(lsAuth ?? '');

    if (lsAuth && validAuth) {
      this.currentUserSubject = new BehaviorSubject(lsAuth);
    } else {
      this.currentUserSubject = new BehaviorSubject('');
    }

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentAuthValue(): string {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    if (this.validLogins.has(username)) {
      if (password !== this.validLogins.get(username)) {
        return { success: false, message: 'Password is incorrect' };
      } else {
        this.currentUserSubject.next(username);
        localStorage.setItem('gaggleAuth', username);
        return { success: true };
      }
    } else {
      return { success: false, message: 'Username not found' };
    }
  }

  register(username: string, password: string) {
    this.validLogins.set(username, password);

    localStorage.setItem(
      'gaggleValidLogins',
      JSON.stringify([...this.validLogins.entries()])
    );
  }

  logout() {
    localStorage.removeItem('gaggleAuth');
  }
}
