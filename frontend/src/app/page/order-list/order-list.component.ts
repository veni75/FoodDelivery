import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderList$: Observable<Order[]> = this.orderService.getAll();
  cols: any[] = this.config.orderColumns;
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new Order());
  direction: boolean = false;
  
  constructor(
    private orderService: OrderService,
    private router: Router,
    private config: ConfigService    
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
  }

  onDelete(order: Order): void {
    if (!confirm("Biztos, hogy törölni szeretnéd?")) {
      return;
    }
    this.orderService.remove(order).subscribe(
      p => this.orderList$ = this.orderService.getAll()
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

