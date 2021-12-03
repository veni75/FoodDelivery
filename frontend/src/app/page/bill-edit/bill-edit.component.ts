import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  constructor(
    private billService: BillService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params._id) === 0) {
        return of(new Bill());
      }

      return this.billService.get(Number(params._id));
    })
  );

  statuses: string[] = ["új", "fizetve"];

  updating: boolean = false;

  onUpdate(form: NgForm, bill: Bill): void {
    if (bill._id === 0) {
      this.billService.create(bill).subscribe(
        () => this.router.navigate(['admin/bill'])
      );
    } else {
      this.updating = true;
      this.billService.update(bill).subscribe(
        () => this.router.navigate(['admin/bill'])
      );
    }
  }
}
