import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserDto } from 'src/app/types/dtos/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.getUserSex();
  }

  constructor(
    private authService: AuthService
  ) { }

  userData: UserDto = JSON.parse(localStorage.getItem('userData'));
  userSex: string = "";

  getUserSex() {
    if(this.userData.sexo === "Hombre"){
      this.userSex = "https://res.cloudinary.com/sline-uy/image/upload/v1602080778/male-profile.png"
    }
    if(this.userData.sexo === "Mujer"){
      this.userSex = "https://res.cloudinary.com/sline-uy/image/upload/v1602080775/female-profile.png"
    }
  }

  logout = this.authService.logout;
}
