import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-displayQuestions',
  templateUrl: './displayQuestions.component.html',
  styleUrls: ['./displayQuestions.component.css']
})
export class DisplayQuestionsComponent implements OnInit {
allQuestions_Data:any=null;
currQuest:any=null;
currQuestIndex = 0;
currQuestIndex2 = 0;
maxCurrQuestIndex = null;
totalMarks = 0;
wrongBool = null;
clickedBool = false;
leaderBoardBool = false;
  constructor(private auth:AuthService) { }

  ngOnInit() {
this.allQuestions_Data = this.auth._allQuestionsData.sort((a,b)=>0.5-Math.random());
this.maxCurrQuestIndex = this.allQuestions_Data.length ;
this.getCurrQuest();
  }

  nextQuest(){
    this.currQuestIndex+=1;
    this.getCurrQuest();
this.clickedBool=false;
this.wrongBool = null;


  }

  getCurrQuest(){
    this.currQuest = this.allQuestions_Data[this.currQuestIndex];
this.currQuest.options.sort((a,b)=>0.5-Math.random());
  }

  finishQuest(){
    this.leaderBoardBool=true;
// console.log(this.totalMarks)
      this.auth.currUser.marksScored = this.totalMarks;
  }

  optClicked(optIndex){

    let selOpt = this.currQuest.options[optIndex];
this.clickedBool=true;
if(selOpt==this.currQuest.ans){
this.totalMarks += this.currQuest.marks;
}else{
  this.wrongBool = optIndex;
}
this.currQuestIndex2+=1;

  }

  retryEventFun(){
    this.leaderBoardBool=false;
    this.allQuestions_Data=null;
this.currQuest=null;
this.currQuestIndex = 0;
this.currQuestIndex2 = 0;
this.maxCurrQuestIndex = null;
this.totalMarks = 0;
this.wrongBool = null;
this.clickedBool = false;

this.allQuestions_Data = this.auth._allQuestionsData.sort((a,b)=>0.5-Math.random());
this.maxCurrQuestIndex = this.allQuestions_Data.length ;
this.getCurrQuest();
  }
}
