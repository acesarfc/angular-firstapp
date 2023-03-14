import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})



export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}
/**The addToCart() method does the following:

Takes the current product as an argument
Uses the CartService addToCart() method to add the product to the cart
Displays a message that you've added a product to the cart */

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Producte afegit!');
  }
    
  ngOnInit() {
    //extraemos el id del parámetro
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //troba el producte que correspon al id
    this.product = products.find(product => product.id === productIdFromRoute);

  }
}
