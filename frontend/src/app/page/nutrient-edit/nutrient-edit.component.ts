import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Nutrient } from '../../model/nutrient';
import { NutrientService } from 'src/app/service/nutrient.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-nutrient-edit',
  templateUrl: './nutrient-edit.component.html',
  styleUrls: ['./nutrient-edit.component.scss']
})
export class NutrientEditComponent implements OnInit {
  
  constructor(
    private nutrientService: NutrientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  }

  nutrient$: Observable<Nutrient> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params._id) === 0) {
        return of(new Nutrient());
      }

      return this.nutrientService.get(Number(params._id));
    })
  );
      
  foodGroups: string[] = ["gabona", "gyümölcs", "hüvelyes", "olajos mag", "tejtermék", "zöldség"];  
  statuses: string[] = ["új", "teljesítve"];  

  updating: boolean = false;

  onUpdate(form: NgForm, nutrient: Nutrient): void {
    if (nutrient._id === 0) {
      this.nutrientService.create(nutrient).subscribe(
        () => this.router.navigate(['admin/nutrient'])
      );
    } else {
      this.updating = true;
      this.nutrientService.update(nutrient).subscribe(
        () => this.router.navigate(['admin/nutrient'])
      );
    }
  }
}