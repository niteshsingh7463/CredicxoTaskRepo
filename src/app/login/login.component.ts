import { allAuthData } from './../myData';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _allAuthData = allAuthData;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authentication:AuthService) { }
  wrongPass = -1;
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.minLength(5)]),

    })

  }
  get password() {return this.loginForm.get('password')}

  onSubmit() {
    let userName = this.loginForm.get('username').value;
    let userPassword = this.loginForm.get('password').value ;
    let data:any = this._allAuthData.find(n1=>n1.email==userName);

if(data){
  if(data.password==userPassword){
  this.wrongPass = -1;
  this.authentication.login(data);}

  else{ this.wrongPass = 1
    this.authentication.logout();}
}else{ this.wrongPass = 1
  this.authentication.logout();}

  }
}
