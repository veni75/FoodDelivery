import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList$: Observable<User[]> = this.userService.getAll();
  cols: any[] = this.config.userColumns;
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'amount';
  filterKeys: string[] = Object.keys(new User());
  direction: boolean = false;
  
  constructor(
    private userService: UserService,    
    private config:ConfigService
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    if (!confirm("Biztos, hogy törölni szeretnéd?")) {
      return;
    }
    this.userService.remove(user).subscribe(
      user => this.userList$ = this.userService.getAll()
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

