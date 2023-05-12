import { Component } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
@Component({

 selector: 'app-addresponse',

 templateUrl: './addresponse.component.html',

 styleUrls: ['./addresponse.component.css']

})

export class AddresponseComponent {




 id:any;

 name:any;

 type:any;

 

 image:any;

description:any;

 quantity:any;

 errors:string[]=[];

 constructor(private hs:DetailsService) { }

 submit(){

 this.errors = []



 if(this.name==undefined || this.name.length<3)

 this.errors.push("Name should be greater than 3 characters")

 if(this.type==undefined )

 this.errors.push("type is required")

 

 if(this.image==undefined )

 this.errors.push("image is required")

 if(this.description==undefined)

 this.errors.push("First name should be greater than 3 characters")

if(this.quantity==undefined)
 this.errors.push("atleast 1 character")

 if(this.errors.length==0){

 let obj={

  id:Math.round(Math.random()*100000),

  name:this.name,
  type:this.type,

 

 image:this.image,

 description:this.description,

 quantity:this.quantity

 }

 this.hs.postProducts(obj).subscribe({

 next: ()=>{

 alert("Successfully Added .Thank you..")

 this.name="",

 this.type="",

 

 this.image="",

 this.description="",

 this.quantity=""

 },

 error: ()=>alert("There is a problem in adding this!")




 }




 )




 }




 }

}
