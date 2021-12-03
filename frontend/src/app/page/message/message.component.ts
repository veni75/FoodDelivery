import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/service/message.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit { 

  messageList$: Observable<Message[]> = this.messageService.getAll();
  cols: any[] = this.config.messageColumns;
  columnKey: string = '';
  phrase: string = '';
  filterKey: string = 'message';
  filterKeys: string[] = Object.keys(new Message());
  direction: boolean = false;
  
  constructor(
    private messageService: MessageService,    
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.messageService.getAll();
  }

  onDelete(message: Message): void {
    if (!confirm("Biztos, hogy törölni szeretnéd?")) {
      return;
    }
    this.messageService.remove(message).subscribe(
      message => this.messageList$ = this.messageService.getAll()
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

