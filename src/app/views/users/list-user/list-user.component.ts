import { Component, OnInit } from '@angular/core';
import User from '../user.model';
import { UsersService } from '../shared/services/users.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  deleteSubs: Subscription;
  allUsers: User[];

  constructor(
    private router: Router,
    private userService: UsersService
  ) {  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((users: User[]) => {
      this.allUsers = users;
    })
  }

  onRemove(id: number) {    
    
    this.deleteSubs = this.userService.deleteUser(id).subscribe();  
    this.allUsers = this.allUsers.filter(usr =>  usr.id !== id);   
  }
  
  ngOnDestroy(){
    if(this.deleteSubs){
      this.deleteSubs.unsubscribe();
    }
  }
}
