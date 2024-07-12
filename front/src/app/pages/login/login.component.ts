import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: () => {},
        error: error => {
          this.error = 'Nop, mauvais mot de passe ou nom';
        }
      });
  }

  onRegister() {
    this.authService.register(this.username, this.password)
      .subscribe({
        next: () => {},
        error: error => {
          this.error = 'Oups une erreur est arrivée';
        }
      });
  }
}
