import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //extraemos el id del parámetro
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //troba el producte que correspon al id
    this.product = products.find(product => product.id === productIdFromRoute);

  }
}
