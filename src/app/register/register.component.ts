import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup =  null;

errorBool = true;

constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required,Validators.minLength(7)]),
      'confirmPass': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'role': new FormControl('',[Validators.required]),
    },{validators:this.checkPasswords})
  }
  get name(){return this.registerForm.get('name')}
  get password(){return this.registerForm.get('password')}
  get confirmPass(){return this.registerForm.get('confirmPass')}
  get email(){return this.registerForm.get('email')}
  get role(){return this.registerForm.get('role')}

  checkPasswords(fg:FormGroup){
      let pass = fg.get('password').value;
      // console.log('pass:>>',pass);
      let confirmPass = fg.get('confirmPass').value;
if(confirmPass==''){ return null;}else
{      return (pass === confirmPass ? null : { 'notSame': true });
}}

onSubmit(){
let name1 = this.registerForm.get('name').value;
let password1 = this.registerForm.get('password').value;
let email1 = this.registerForm.get('email').value;
let role1 = this.registerForm.get('role').value;
let data = {
  "name": name1,
"email": email1,
"password": password1,
"role": role1
}
let registrationMsg = this.auth.register(data);
if(registrationMsg==1){
  this.errorBool=true;alert('User created successfully');this.router.navigate(['/login']);
}else{
 this.errorBool=false;
}
}


}


