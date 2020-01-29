import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm: FormGroup;
  submitted = false;
  invalidregister = false;

Id = '' ;
Name = '';
password = '';
details = '';

@Output () IdCreated = new EventEmitter();
  formBuilder: any;

onAddId() {
  const empl = {
    id : ['', Validators.required],
    Name : ['', [Validators.required, Validators.maxLength(15)]],
    // tslint:disable-next-line: max-line-length
    password : ['', [Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$') , Validators.required]],
    details : this.details,

  };
  this.IdCreated.emit( empl );

  }

}
