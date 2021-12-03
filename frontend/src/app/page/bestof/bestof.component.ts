import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nutrient } from 'src/app/model/nutrient';
import { NutrientService } from 'src/app/service/nutrient.service';

@Component({
  selector: 'app-bestof',
  templateUrl: './bestof.component.html',
  styleUrls: ['./bestof.component.scss']
})
export class BestofComponent implements OnInit {

  nutrientsList$: Observable<Nutrient[]> = this.nutrientService.getAll();

  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Nutrient());
  direction: boolean = false;  
  update: boolean = false;
  myComponent: string = '';
  myFood: string = '';
  componentList: string[] = ["Avitamin", "B1vitamin", "B2vitamin", "B3vitamin", "B5vitamin", "B6vitamin", "B12vitamin", "Cvitamin", "Dvitamin", "Evitamin", "Kvitamin", "folát", "cink", "foszfor", "kalcium", "kalium", "magnezium", "mangan", "natrium", "rez", "szelen", "vas", "szenhidrat", "rost", "kemenyito", "feherje", "cisztein", "fenil-alanin", "hisztidin", "izoleucin", "leucin", "lizin", "metionin", "tirozin", "treonin", "triptofan", "valin", "zsir", "omegaharom", "omegahat", "telitett"];
  foodList: string[] = ["gabona", "gyümölcs", "hüvelyes", "olajos mag", "tejtermék", "zöldség"];
  showTable: boolean = false;

  constructor(
    private nutrientService: NutrientService       
  ) { }

  ngOnInit(): void {
    this.nutrientService.getAll();
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.direction = !this.direction;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  
}

