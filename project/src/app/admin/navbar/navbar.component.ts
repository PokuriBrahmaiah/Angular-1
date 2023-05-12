import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['Home'],{relativeTo:this.ar})
      }

  
  addproducts(){
this.router.navigate(['Addproducts'],{relativeTo:this.ar})
  }
  
  forum(){
    this.router.navigate(['Forum'],{relativeTo:this.ar})
  }

  logout() {
    this.router.navigate(['/login']);
    }


}
