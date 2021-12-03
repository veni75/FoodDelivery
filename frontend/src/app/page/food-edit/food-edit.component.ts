import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodsService } from 'src/app/service/food.service';
import { NgForm } from '@angular/forms';
import { Food } from '../../model/food';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  food$: Observable<Food> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params._id) === 0) {
        return of(new Food());
      }

      return this.foodService.get(Number(params._id));
    })
  );
      
  categories: string[] = ["normal", "vegetarianus", "vegan", "nyersvegan", "mentes", "lowcarb"];
  updating: boolean = false;

  onUpdate(form: NgForm, food: Food): void {
    if (food._id === 0) {
      this.foodService.create(food).subscribe(
        () => this.router.navigate(['admin/food'])
      );
    } else {
      this.updating = true;
      this.foodService.update(food).subscribe(
        () => this.router.navigate(['admin/food'])
      );
    }
  }
}