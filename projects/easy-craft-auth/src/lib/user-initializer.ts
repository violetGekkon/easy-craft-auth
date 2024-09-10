import {HttpClient} from '@angular/common/http';
import {inject} from '@angular/core';
import {tap} from "rxjs";
import {AuthService} from "./auth.service";
import {UserInfo} from "./user-info.interface";

export const initializeUser = () => {

  const apiUrl = `${window.location.origin}/gateway/api`;
  const userService = inject(AuthService);

  // Запрос данных о пользователе
  // return () => http.get<UserInfo>(`${apiUrl}/sso/userinfo`, {withCredentials: true})
  //   .pipe(tap(user => userService.setUser(user)));
  return () => userService.loadUserInfo();
};
