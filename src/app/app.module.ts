import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import {NgxPrintModule} from 'ngx-print';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SchoolinfoService } from './schoolinfo.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    CommonModule,
  FormsModule,

  RouterModule.forRoot(
    [{
      path:"display",component:DisplayComponent },
    {path:'' , component : FormComponent}
    ])
  ],
  providers: [SchoolinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
