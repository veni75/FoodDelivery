import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutrient } from 'src/app/model/nutrient';
import { NutrientService } from 'src/app/service/nutrient.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-nutrient-list',
  templateUrl: './nutrient-list.component.html',
  styleUrls: ['./nutrient-list.component.scss']
})
export class NutrientListComponent implements OnInit {
  
  
  
  nutrientsList$: Observable<Nutrient[]> = this.nutrientService.getAll();
  cols: any[] = this.config.nutrientColumns;
  
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Nutrient());
  direction: boolean = false;
    
  constructor(
    private nutrientService: NutrientService,    
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.nutrientService.getAll();
  }

  onDelete(nutrient: Nutrient): void {
    if (!confirm("Biztos, hogy törölni szeretnéd?")) {
      return;
    }
    this.nutrientService.remove(nutrient).subscribe(
      nut => this.nutrientsList$ = this.nutrientService.getAll()
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

