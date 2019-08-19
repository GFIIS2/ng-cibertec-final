import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import User from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createSubs: Subscription;

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

  onSubmit(user: User){
    this.createSubs = this.userService.createUser(user)
    .subscribe((user: User) => {
      this.router.navigate(['/users']);
    });   
  }

  ngOnDestroy(){
    if(this.createSubs){
      this.createSubs.unsubscribe();
    }
  }
}
