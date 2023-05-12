import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() pro1: any;

selectedProduct: any;

selectProduct(product: any) {
this.selectedProduct = product;
}

productlist: any;
product = null;

constructor(private ps: DetailsService, private http: HttpClient) {
this.ps.getProducts().subscribe({
next: (data: any) => (this.productlist = data),
error: () => (this.productlist = [])
});
}

ngOnInit(): void {}
}