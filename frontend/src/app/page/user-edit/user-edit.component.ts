import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
   
    ) { }

  ngOnInit(): void {
  }

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap( params => {
      if (Number(params._id) === 0) {
        return of(new User());
      }

      return this.userService.getOne(Number(params._id));
    })
  );
      
  updating:boolean=false;

  onUpdate(form: NgForm, user: User): void {
    if (user._id === 0) {
      this.userService.create(user).subscribe(
        () => this.router.navigate(['admin/user'])
      );
    } else {
      this.updating = true;
      this.userService.update(user).subscribe(
        () => this.router.navigate(['admin/user'])
      );
    }

  }

}
