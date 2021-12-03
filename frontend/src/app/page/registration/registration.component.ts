import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  

  constructor(
    private userService: UserService    
  ) { }

  ngOnInit(): void {
  }

  user: User = new User();
  success:boolean = false;

  onSave(ngForm: NgForm): void {
       
    this.userService.create(ngForm.value).subscribe(
      user => this.success = true,
      err=> console.error(err)      
    );
  }
  
}
