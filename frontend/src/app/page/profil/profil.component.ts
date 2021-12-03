import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  user: any = this.auth.currentUserValue;
  success:boolean = false;

  onUpdate(ngForm: NgForm): void {
       
    this.userService.update(ngForm.value).subscribe(
      user => this.success = true,
      err=> console.error(err)      
    );
  }
  
}







