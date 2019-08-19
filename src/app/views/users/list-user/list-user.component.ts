import { Component, OnInit } from '@angular/core';
import User from '../user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  allUsers: User[];

  constructor(
    private userService: UsersService
  ) {  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.allUsers = users;
    })
  }

  onRemove(id: number) {    
    this.userService.deleteUser(id);
    this.allUsers = this.allUsers.filter(usr =>  usr.id !== id);
  }
}
