import { FoodService } from './../services/food/food.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/models/food';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      } 
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
