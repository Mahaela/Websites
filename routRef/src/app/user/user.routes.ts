﻿import { Routes } from "@angular/router";
import { UserDetailComponent } from './user-detail.component.ts';
import { UserEditComponent } from './user-edit.component.ts';
import { UserDetailGuard } from './user.detail.guard';

export const USER_ROUTES: Routes = [
{ path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },
{ path: 'edit', component: UserEditComponent } ];