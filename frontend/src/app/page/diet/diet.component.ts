import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../model/food';
import { FoodsService } from '../../service/food.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit {

  @Input() food: Food[] = [];

  foodList$: Observable<Food[]> = this.activatedRoute.params.pipe(
    switchMap(params => this.foodsService.getAllCategory((params.category))
    )
  );

  titleArray: any = { normal: "Hagyományos ételek", vegetarianus: "Vegetarianus ételek", vegan:"Vegán ételek", nyersvegan: "Nyers vegán ételek", mentes: "Mentes ételek", lowcarb: "Alacsony szénhidráttartalmú ételek" };

  title: any = this.activatedRoute.params.pipe(
    map(params => this.titleArray[params.category])
  );

  phrase: string = '';
  constructor(
    private foodsService: FoodsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  ngOnInit(): void {
  }

}