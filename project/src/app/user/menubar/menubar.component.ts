import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
selector: 'app-menubar',
templateUrl: './menubar.component.html',
styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
lang:any="english";
languages:any=[
{name:"English",value:"english"},
{name:"Tamil",value:"tamil"},
{name:"Telugu",value:"telugu"},
{name:"Hindi",value:"hindi"}
]

constructor(private router:Router,private ar:ActivatedRoute, private ts :TranslateService ) {
this.ts.use(this.lang)
}

ngOnInit(): void {
}

home(){
this.router.navigate(['Home'],{relativeTo:this.ar})
}

dietplan(){
this.router.navigate(['Dietplan'],{relativeTo:this.ar})
}

feedbacks(){
this.router.navigate(['Feedbacks'],{relativeTo:this.ar})
}

creatediet(){
    this.router.navigate(['Creatediet'],{relativeTo:this.ar})
}


forum(){
this.router.navigate(['Forum'],{relativeTo:this.ar})
}

logout() {
this.router.navigate(['/login']);
}

changeLang():void{
this.ts.use(this.lang)
}
}