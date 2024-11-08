import { Component } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  helloMessage: string = '';  // Property to store the message from the backend

  constructor(private messageService: MessageServiceService) { }

  ngOnInit(): void {
    // Call the service method to get the message when the component is initialized
    this.messageService.getMessage().subscribe({
      next: (data) => {
        this.helloMessage = data.content;  // Assuming the response contains 'content'
      },
      error: (error) => {
        console.error('Error fetching message:', error);
      }
    });
  }

}
