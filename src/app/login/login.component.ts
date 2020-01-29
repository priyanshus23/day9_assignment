import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup;
 submitted = false;
 invalidLogin = false;



 constructor(private formBuilder: FormBuilder) { }

 onSubmit() {
 this.submitted = true;
 if (this.loginForm.invalid) {
 return;
 } else {
 this.invalidLogin = true;
 }
 }

 ngOnInit() {
 this.loginForm = this.formBuilder.group({
 email: ['', Validators.required, Validators.email ],
 password: ['', Validators.required, Validators.minLength(8)]
 });
 }

}
