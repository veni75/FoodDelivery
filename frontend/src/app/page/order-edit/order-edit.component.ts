import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Order } from '../../model/order';
import { OrderService } from 'src/app/service/order.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap(params =>  {
      if (Number(params._id) === 0) {
        return of(new Order());
      }

      return this.orderService.get(Number(params._id));
    })
  );
      
  statuses: string[] = ["új", "teljesítve"];  

  updating: boolean = false;

  onUpdate(form: NgForm, order: Order): void {
    if (order._id === 0) {
      this.orderService.create(order).subscribe(
        () => this.router.navigate(['admin/order'])
      );
    } else {
      this.updating = true;
      this.orderService.update(order).subscribe(
        () => this.router.navigate(['admin/order'])
      );
    }
  }

  
}