import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service.ts'
import { Ingredient } from '../ingredient.ts';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',

})
export class ShoppingListComponent implements OnInit {
    items: Ingredient[] = [];
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
      this.items = this.sls.getItems();
  }

}
