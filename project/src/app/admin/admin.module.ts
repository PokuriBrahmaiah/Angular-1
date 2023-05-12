import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ResponsesComponent } from './responses/responses.component';
import { ResponsespageComponent } from './responses/responsespage/responsespage.component';
import { ResponsesboxComponent } from './responses/responsesbox/responsesbox.component';
import { FormsModule } from '@angular/forms';
import { AddresponseComponent } from './addproducts/addresponse/addresponse.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AddproductsComponent,
    ResponsesComponent,
    ResponsespageComponent,
    ResponsesboxComponent,
    AddresponseComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule

  ]
})
export class AdminModule { }
