import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
