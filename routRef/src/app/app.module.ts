import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
import { routing } from './app.routing.ts';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailGuard } from './user/user.detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [UserDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
