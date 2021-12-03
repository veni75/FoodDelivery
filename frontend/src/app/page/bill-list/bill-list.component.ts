import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  billList$: Observable<Bill[]> = this.billService.getAll();
  cols: any[] = this.config.billColumns;
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Bill());
  direction: boolean = false;
  summa: any;
  piece: any;

  constructor(
    private billService: BillService,
    private router: Router,
    private config: ConfigService,

  ) { }

  ngOnInit(): void {
    this.billService.getAll();
  }

  onDelete(bill: Bill): void {
    if (!confirm("Biztos, hogy törölni szeretnéd?")) {
      return;
    }
    this.billService.remove(bill).subscribe(
      p => this.billList$ = this.billService.getAll()
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

