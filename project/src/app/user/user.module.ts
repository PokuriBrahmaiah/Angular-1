import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from '../material/material.module';
import { DietplanComponent } from './dietplan/dietplan.component';

import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { ItemsComponent } from './home/items/items.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { RouterModule } from '@angular/router';
import { ForumpageComponent } from './forum/forumpage/forumpage.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { DetailsComponent } from './home/details/details.component';
import { DietComponent } from './dietplan/diet/diet.component';
import { DietdetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { FeedbackBoxComponent } from './feedbacks/feedback-box/feedback-box.component';
import { FeedbackFormComponent } from './feedbacks/feedback-form/feedback-form.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CreatedietComponent } from './creatediet/creatediet.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

export function HttpLoaderFactory(http: HttpClient) {

   return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
  
  }



@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    DietplanComponent,
    DietComponent,
    ForumComponent,
    ItemsComponent,
    TypefilterPipe,
    ForumpageComponent,
    ForumresponseComponent,
    DetailsComponent,
    DietComponent,
    DietdetailsComponent,
    FeedbackBoxComponent,
    FeedbackFormComponent,
    FeedbacksComponent,
    
    CreatedietComponent
    

    
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({

       loader: {
      
       provide: TranslateLoader,
      
       useFactory: HttpLoaderFactory,
      
        deps: [HttpClient]
      
       }
      
       })
    
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
    
  ]
})
export class UserModule { }
