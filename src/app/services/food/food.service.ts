import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/hamburger.jpeg',
        tags: ['Fast food', 'Hamburger', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pasta',
        cookTime: '10-25',
        price: 5,
        favorite: false,
        origins: ['Italy'],
        stars: 4,
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Pasta', 'Italian', 'Dinner'],
      },
      {
        id: 3,
        name: 'Pizza',
        cookTime: '30-45',
        price: 15,
        favorite: true,
        origins: ['Italy'],
        stars: 5,
        imageUrl: '/assets/images/pizza.jpeg',
        tags: ['Pizza', 'Italian', 'Dinner'],
      },
      {
        id: 4,
        name: 'Wings',
        cookTime: '25-30',
        price: 10,
        favorite: true,
        origins: ['USA'],
        stars: 5,
        imageUrl: '/assets/images/wings.jpeg',
        tags: ['Chicken Wings', 'American', 'Lunch'],
      },
      {
        id: 5,
        name: 'Steak',
        cookTime: '45-60',
        price: 20,
        favorite: true,
        origins: ['USA'],
        stars: 5,
        imageUrl: '/assets/images/steak.jpeg',
        tags: ['Steak', 'American', 'Dinner'],
      }
    ]
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Pizza', count: 4 },
      { name: 'Hamburger', count: 2 },
      { name: 'Pasta', count: 3 },
      { name: 'Steak', count: 2 },
      { name: 'Wings', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }
}
