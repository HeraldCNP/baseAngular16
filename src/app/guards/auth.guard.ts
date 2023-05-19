import { CanActivateFn } from '@angular/router';

    // @Injectable({
    //   providedIn: 'root'
    // })
    // class PermissionsService {

    //   constructor(private router: Router) {}

    //   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //       //your logic goes here
    //   }
    // }

    // export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    //   return inject(PermissionsService).canActivate(next, state);
    // }

export const authGuard: CanActivateFn = (route, state) => {


  console.log('paso por el guard');

  return true;
};
