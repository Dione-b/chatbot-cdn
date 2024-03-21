import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

interface ChatMessage {
  text: string;
  user: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  messages: ChatMessage[] = [];

  userInput: string = '';

  loading: boolean = false;
  error: string | null = null;

  userImagePath = 'assets/img/profile.jpg';
  botImagePath = 'assets/img/botImage.png';

  formattedResponse: SafeHtml = '';
  customErrorMessage: string | null = null;

  isLoading: boolean = false;
  errorOcurred: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.messages.push({
      text: 'Olá me chamo Jorge! Como posso ajudá-lo hoje?',
      user: false,
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      const element = this.messagesContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) {}
  }

  autoGrow(event: any): void {
    const textArea = event.target;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  async sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ text: this.userInput, user: true });
    const userMessage = this.userInput;

    this.isLoading = true;
    this.errorOcurred = false;
    this.customErrorMessage = '';

    try {
      const response = await lastValueFrom(
        this.chatService.sendMessage(userMessage)
      );
      const botMessage = response.answer;
      this.messages.push({ text: botMessage, user: false });
    } catch (err) {
      this.handleError(
        'Estou enfrentando dificuldades técnicas no momento. Por favor, tente novamente mais tarde.'
      );
      console.error(err);
    } finally {
      this.isLoading = false;
    }
    this.userInput = ''; // Clear the input field
  }

  handleError(errorMessage: string): void {
    this.customErrorMessage = errorMessage;
    this.errorOcurred = true;
  }

}
