import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  currentUser:any=null;
  currentUserRole:any=null;
  constructor(private authentication: AuthService) { }

  ngOnInit() {
    this.authentication.loginStatusObs$.subscribe(status => {
      this.currentUser = status;
      this.currentUserRole = this.currentUser.role;

      console.log('Status::>',status);
    })
  }
  logout() {
    this.currentUser = null;
    this.currentUserRole=null;
    this.authentication.logout();
  }
}
