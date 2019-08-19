import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import User from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editSubs: Subscription;
  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    
    this.userService.getUser(+id).subscribe( (user : User) =>
      this.user =  user
    );    
  }

  onSubmit(user: User){
    this.editSubs = this.userService.updateUser(this.user)
    .subscribe((user: User) => {
      this.router.navigate(['/users']);
    });   
  }

  ngOnDestroy(){
    if(this.editSubs){
      this.editSubs.unsubscribe();
    }
  }
}
