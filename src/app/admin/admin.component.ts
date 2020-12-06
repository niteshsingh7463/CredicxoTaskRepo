import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private auth:AuthService){}
  all_Auth_Data:any=null;
  ngOnInit() {
    this.all_Auth_Data = this.auth.authData.filter(n1=>n1.role=='user');
  }
remove(email){
  console.log('email',email)
let index =  this.auth.authData.findIndex(n1=>n1.email==email);
this.auth.authData.splice(index,1);

this.all_Auth_Data = this.auth.authData.filter(n1=>n1.role=='user');
console.log(this.auth.authData);
}
}
