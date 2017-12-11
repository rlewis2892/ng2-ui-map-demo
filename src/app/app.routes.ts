// import @angular dependencies
import {RouterModule, Routes} from "@angular/router";

// import components
import {HomeComponent} from "./components/home.component";

// import services
import {AuthService} from "./services/auth-service";
import {CookieService} from "ng2-cookies";

// import interceptors
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DeepDiveInterceptor} from "./services/deep.dive.interceptor";

// array of components to be passed off to the module
export const allAppComponents = [
	HomeComponent
];

// setup routes
export const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

// array of services
const services: any[] = [
	AuthService,
	CookieService
];

// array of providers
const providers : any[] = [
	{provide: APP_BASE_HREF, useValue: window["_base_href"]},
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true}
];

export const appRoutingProviders: any[] = [providers, services];

export const routing = RouterModule.forRoot(routes);