import { Routes, RouterModule } from "@angular/router";
import { HomeComponentComponent } from './home-component.component.ts';
import { UserComponent } from './user/user.component.ts';

const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: '', component: HomeComponentComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);