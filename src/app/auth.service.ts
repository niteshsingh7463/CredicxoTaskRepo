import { allAuthData } from './myData';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatusObs = new Subject();
  public loginStatusObs$ = this.loginStatusObs.asObservable();

  constructor(private router: Router) { }
  currUser = null;
  authData = allAuthData;


  login(response) {
    this.currUser = response;
    this.loginStatusObs.next(response);

    this.router.navigate(['/']);
  }
  logout() {
    this.currUser = null;
    
  }

  register(data){
let temp1 = this.authData.find(n1=>n1.email==data.email);

if(temp1){
  return -1;
}else{
  this.authData.push(data);
  return 1;
}

}
  }
