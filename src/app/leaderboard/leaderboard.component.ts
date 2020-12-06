import { EventEmitter,Component, OnInit, Output } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
@Output() retryEvent = new EventEmitter();
  constructor(private auth:AuthService) { }
userScore = null;
maxScore = null;
leaderBoardArr:any = null;
  ngOnInit() {
    // console.log(this.auth.currUser);
    this.userScore = this.auth.currUser.marksScored;
    this.maxScore = this.auth._allQuestionsData.reduce((acc,curr)=>acc+curr.marks,0);
    this.getLeaderBoard();
  }

  getLeaderBoard(){
this.leaderBoardArr= this.auth.authData.filter(n1=>n1.marksScored!=null);
 this.leaderBoardArr=this.leaderBoardArr.sort((a,b)=>b.marksScored-a.marksScored).splice(0,10);
}

retryFun(){
this.retryEvent.emit();
}
}
