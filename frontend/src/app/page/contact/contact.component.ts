import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
 
  message: Message = new Message(); 
  success: boolean = false;     

  onSave(ngForm: NgForm): void {    
      this.messageService.create(ngForm.value).subscribe(
        message => this.success = true,
        err=> console.error(err)
      );
    
  }
}