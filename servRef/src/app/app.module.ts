import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CmpntBComponent } from './cmpnt-b.component';
import { ServiceComponent } from './service/service.component';

import { LogService } from './log.service.ts'

@NgModule({
  declarations: [
    AppComponent,
    CmpntBComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
