import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet, Router } from '@angular/router'
// import { ApiService } from './api.service';
// import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'artisan-app';

  constructor(
    // private apiService: ApiService,
    private router: Router,
  ) { }


}
