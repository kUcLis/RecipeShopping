import { Component } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes',5),
    new Ingredient('Pasta',100),
    new Ingredient('Buns',3),
    new Ingredient('Sousages',4)
  ];
}
