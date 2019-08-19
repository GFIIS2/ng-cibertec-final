import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import User from '../../../user.model';
import {Location} from '@angular/common'

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    @Input() model: User = new User();
    @Input() type: string;
    @Output() handleSubmit: EventEmitter<User> = new EventEmitter<User>() ;
    buttonTitle: string = '';

    constructor(private location: Location){

    }

    ngOnInit(){
        this.buttonTitle = this.type === 'edit' ? 'Actualizar': 'Crear';
    }

    onCancel(){
        this.location.back();
    }

    onSubmit(form) {
        const { valid, value } = form;
        
        if(valid){
            this.handleSubmit.emit(value);
        }        
    }
}
