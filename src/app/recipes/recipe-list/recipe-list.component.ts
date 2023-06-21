import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
      recipes: Recipe[] = [

        new Recipe('Spaghetti', 'Crush some tomatoes and add pasta!', 'https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?quality=90&webp=true&resize=300,272'),
        new Recipe('HotDog', 'Open the bun and put sousage in it!', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fb24eb5b3eaadb597e0bee74b88f3443d%2F1646837139perfect-hot-dog.jpg.optimal.jpg&q=60&c=sc&orient=true&poi=auto&h=512')
      ];
}
