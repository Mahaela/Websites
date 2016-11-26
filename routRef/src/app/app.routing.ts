import { Routes, RouterModule } from "@angular/router";
import { HomeComponentComponent } from './home-component.component.ts';
import { UserComponent } from './user/user.component.ts';
import { USER_ROUTES } from './user/user.routes.ts';

const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    { path: '', component: HomeComponentComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);