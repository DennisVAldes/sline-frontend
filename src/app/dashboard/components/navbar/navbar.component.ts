import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDto } from 'src/app/types/dtos/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

  constructor(
    private authService: AuthService
  ) { }

  userData: UserDto;

  logout = this.authService.logout;
}
