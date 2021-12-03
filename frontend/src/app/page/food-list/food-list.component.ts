import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/food';
import { FoodsService } from 'src/app/service/food.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foodsList$: Observable<Food[]> = this.foodsService.getAll();
  cols: any[] = this.config.foodColumns;
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Food());
  direction: boolean = false;
    
  constructor(
    private foodsService: FoodsService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.foodsService.getAll();
  }

  onDelete(food: Food): void {    
    if (!confirm("Biztos, hogy törölni szeretnéd?")) {
      return;
    }
    this.foodsService.remove(food).subscribe(
      food => this.foodsList$ = this.foodsService.getAll()
    );
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.direction = !this.direction;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;

  }
  
}
