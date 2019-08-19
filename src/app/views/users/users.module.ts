import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import { UsersService } from './shared/services/users.service';
import { UserFormComponent } from './shared/forms/user-form/user-form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ListUserComponent,
    HoverDirective,    
    CreateUserComponent,
    EditUserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ListUserComponent
  ],
  providers: [    
    UsersService
  ]
})
export class UsersModule { }
