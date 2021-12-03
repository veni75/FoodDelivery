import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/model/food';
import { FoodsService } from 'src/app/service/food.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  
  @Input() food: Food = new Food();
  
  constructor(
    private foodsService: FoodsService,
  ) { }

  ngOnInit(): void {
  }

}