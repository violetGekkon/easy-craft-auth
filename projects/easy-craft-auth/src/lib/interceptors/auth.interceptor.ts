import { HttpInterceptorFn } from '@angular/common/http';
import {tap} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    tap({
      error: (err) => {
        if (err.status === 401) {
          // Если 401, выполняем редирект на SSO
          const locationHref = window.location.origin;
          window.location.href = `${locationHref}/oauth2/authorization/oidc-client`;
        }
      }
    })
  );
};

