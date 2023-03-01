import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  foods: Food[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      }
      else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });

    this.foods = this.foodService.getAll();
  }

}