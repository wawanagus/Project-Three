import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
// import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('tomato',10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }
}
