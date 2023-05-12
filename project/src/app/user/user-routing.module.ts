import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietplanComponent } from './dietplan/dietplan.component';

import { ForumComponent } from './forum/forum.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { CreatedietComponent } from './creatediet/creatediet.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const routes: Routes = [
  {path:"menubar",component:MenubarComponent,
  children:[
    {path:"home",component:HomeComponent},
    {path:"Dietplan",component:DietplanComponent},
  {path:"Feedbacks",component:FeedbacksComponent},
  {path:"Creatediet",component:CreatedietComponent},
  {path:"Forum",component:ForumComponent},
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
