import { Component } from '@angular/core';
import { UserService } from './User.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KiemTra';
  constructor(private userService: UserService) {}
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
