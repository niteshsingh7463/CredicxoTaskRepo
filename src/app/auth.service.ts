import { allAuthData, allQuestionsData } from './myData';
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
  // currUser = null;
  currUser = {email:'user@user.com',password:'user1234',role:'user',name:'user',marksScored:12};//temporary for testing
  // authData = allAuthData;
  authData = [{email:'user1@user.com',password:'user1234',role:'user',name:'user',marksScored:8},{email:'user2@user.com',password:'user1234',role:'user',name:'user',marksScored:12},{email:'user3@user.com',password:'user1234',role:'user',name:'user',marksScored:null},{email:'user4@user.com',password:'user1234',role:'user',name:'user',marksScored:16},{email:'user@user.com',password:'user1234',role:'user',name:'user',marksScored:20}]//temporary for testing;
  _allQuestionsData = allQuestionsData;


  login(response) {
    this.currUser = response;
    this.loginStatusObs.next(response);

    this.router.navigate(['/quiz']);
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
