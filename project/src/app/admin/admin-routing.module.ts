import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResponsespageComponent } from './responses/responsespage/responsespage.component';
import { ResponsesComponent } from './responses/responses.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:NavbarComponent,
children:[
    {path:"Home",component:HomeComponent},
    {path:"Forum",component:ResponsesComponent},
    {path:"Addproducts",component:AddproductsComponent},
    {path:"responses/:id",component:ResponsespageComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
