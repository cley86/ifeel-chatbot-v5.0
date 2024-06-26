import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  userInput: string = '';
  mensajeBienvenida: string = '';

  constructor() {}

  ngOnInit() {
    this.setMensajeBienvenida();
  }

  setMensajeBienvenida() {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.mensajeBienvenida = 'Hola, buenos días, ¡que bueno verte!,';
    } else if (hora < 18) {
      this.mensajeBienvenida = 'Hola, buenas tardes, ¡es un placer verte!,';
    } else {
      this.mensajeBienvenida = 'Hola, buenas noches, ¡es genial verte!,';
    }
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.userInput = '';
      this.botReply();
    }
  }

  botReply() {
    const replies = [
      'Hola, ¿cómo puedo ayudarte?',
      'Estoy aquí para ayudarte.',
      '¿Podrías darme más detalles?',
      'Eso suena interesante. Cuéntame más.'
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(() => {
      this.messages.push({ text: randomReply, sender: 'bot' });
    }, 1000);
  }
}
