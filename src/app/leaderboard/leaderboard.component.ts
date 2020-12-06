import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private auth:AuthService) { }
userScore = null;
maxScore = null;
  ngOnInit() {
    console.log(this.auth.currUser);
    this.userScore = this.auth.currUser.marksScored;
    this.maxScore = this.auth._allQuestionsData.reduce((acc,curr)=>acc+curr.marks,0);
  }

  getLeaderBoard(){

  }
}
