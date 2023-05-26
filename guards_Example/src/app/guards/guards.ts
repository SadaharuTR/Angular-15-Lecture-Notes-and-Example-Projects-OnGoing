import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

//canActivate Guard'ı
export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //türlü türlü hinlikler işlemler
    console.log('CanActivate Guard tetiklendi.');
    
    return true
}
//canActivateChild Guard'ı
export const canActivateChildGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //türlü türlü hinlikler işlemler
    console.log('CanActivate Guard Child tetiklendi.');
    
    return true
}

//canDeactivate Guard'ı

export const canDeactivateGuard: CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
    //türlü türlü hinlikler işlemler
    console.log('CanDeactivate Guard tetiklendi.');
    
    return true
}

//resolve Guard'ı
export const resolveGuard: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //türlü türlü hinlikler işlemler
    console.log('Resolve Guard tetiklendi.');
    const httpClient = inject(HttpClient);
    return httpClient.get("https://jsonplaceholder.typicode.com/photos")
    
}

//canMatch Guard'ı

export const isAdminGuard: CanMatchFn = ( route: Route, segments: UrlSegment[]) => 
{
    return !!localStorage.getItem("admin")
}

export const isUserGuard: CanMatchFn = ( route: Route, segments: UrlSegment[]) => 
{
    return !localStorage.getItem("user")
}