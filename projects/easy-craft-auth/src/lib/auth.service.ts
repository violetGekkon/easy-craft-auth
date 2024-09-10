import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, ReplaySubject, tap} from "rxjs";
import {UserInfo} from "./user-info.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly apiUrl = `${window.location.origin}/gateway/api`;

  private _userSubject = new ReplaySubject<UserInfo | null>(1);
  public user$: Observable<UserInfo | null> = this._userSubject.asObservable();
  private userLoaded = false;

  getUser() {
    return 'user'
  }
  loadUserInfo(): Observable<UserInfo | null> {

    if (this.userLoaded) {
      return this.user$;
    }
    return this.http.get<UserInfo>(`${this.apiUrl}/sso/userinfo`, {withCredentials: true}).pipe(
      tap(user => {
        this.userLoaded = true;
        this._userSubject.next(user);
      }),
      catchError(error => {
        this.userLoaded = false;
        throw error;
      })
    );
  }

}
