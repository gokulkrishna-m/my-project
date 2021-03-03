import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingrediants:Ingrediant[] = [
    new Ingrediant('Apple',5),
    new Ingrediant('Tometoes',10)
  ];
  constructor() {}

  ngOnInit(): void {
  }

}
