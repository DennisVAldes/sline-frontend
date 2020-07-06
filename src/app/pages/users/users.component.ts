import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/types/dtos/models';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private userService: UserService ) { }

  users: UserDto[];

  private getUsers = async () => {
    try {
      const result = await this.userService.getUsers();
      this.users = result.data;
      console.log(this.users);
    
    } catch (error) {
      
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
