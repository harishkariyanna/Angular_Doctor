import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'day6ang';
  
  constructor(public auth: AuthService, private router: Router) {}
  
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
