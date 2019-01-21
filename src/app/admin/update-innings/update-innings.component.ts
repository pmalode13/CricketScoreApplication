import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/Services/match.service';
import { HeaderService } from 'src/app/Services/header.service';



@Component({
  selector: 'app-update-innings',
  templateUrl: './update-innings.component.html',
  styleUrls: ['./update-innings.component.css']
})
export class UpdateInningsComponent implements OnInit {

  @ViewChild('possibleRun') possiblerunInTS: ElementRef;

  currentBall: number = 0;
  currentOver: number = 0;
  totalRuns: number;
  currentWickets: number;
  strikeBatsman: string;
  currentBowler: string;
  runsOnCurrentBall: number;
  description: string;
  nonStrikeBatsman: string;
  possibleRunsOrWicket;
  battingPlayers;
  fieldingPlayers;

  //For show and hide html component
  public showTypeOfWicket = false;
  public showCatchBy = false;
  public showBowler = false;
  public showStrikeBatsman = false;
  public showNonStrikeBatsman = false;
  public firstInningCompleteNotification = false;

  constructor(public matchService: MatchService, public nav: HeaderService) {
    this.battingPlayers = matchService.getMatch().getBattingTeam().getPlayer();
    this.fieldingPlayers = matchService.getMatch().getBowlingTeam().getPlayer();
    if (matchService.getMatch().getCurrentBall() == 0 && matchService.getMatch().getCurrentOver() == 0) {
      this.showNonStrikeBatsman = true;
      this.showStrikeBatsman = true;
      this.showBowler = true;
    }
  }

  ngOnInit() {
    this.nav.show()
  }

  onChangeOfPossibleRun(event) {
    const element: HTMLInputElement = event.target;
    if (element.value == 'Wicket') {
      this.showTypeOfWicket = true;
    }
    else {
      this.showTypeOfWicket = false;
    }
  }

  onChangeOfBowler(event) {
    const BowlerName: HTMLInputElement = event.target;
    this.matchService.getMatch().getBowlingTeam().getStrikeBowler().setName(BowlerName.value);
  }

  forCatchBy(event) {
    const element: HTMLInputElement = event.target;
    if (element.value == 'Catch') {
      this.showCatchBy = true;
    }
    else {
      this.showCatchBy = false;
    }
  }

  onAddScoreClick() {
    this.currentBowler = this.matchService.getMatch().getBowlingTeam().getStrikeBowler().getName();
    //set and get the current ball and the over for the inning
    this.matchService.getMatch().setCurrentBall();
    this.currentBall = this.matchService.getMatch().getCurrentBall();
    this.currentOver = this.matchService.getMatch().getCurrentOver();

    //hide html elements
    this.showCatchBy = false;
    this.showTypeOfWicket = false;
    this.firstInningCompleteNotification = false;
    
    //add ball faced by player
    this.matchService.getMatch().getBattingTeam().StrikeBatsman().getBatting().setBallFacedByPlayer(1);

    //show new bowler when over is complete 
    if (this.currentBall == 6) {
      this.showBowler = true;
      this.matchService.getMatch().getBowlingTeam().getStrikeBowler().setName(this.currentBowler);
      this.matchService.getMatch().getBowlingTeam().getStrikeBowler().getBowling().setRunsGiven(0);
    }
    else {
      this.showBowler = false;
    }

    //set Name For Bowler


    //Chech the match state anf begin first inning
    if (this.matchService.getMatchState() == 2) {
      this.matchService.setMatchState();
    }

    //set the state that 2nd inning is started
    if (this.matchService.getMatchState() == 4) {
      this.matchService.getMatch().inningChanged();

      this.matchService.setMatchState();
    }

    // Checking the run on current ball  or wicket
    this.possibleRunsOrWicket = ((<HTMLInputElement>this.possiblerunInTS.nativeElement).value);
    if (this.possibleRunsOrWicket == "1" || this.possibleRunsOrWicket == "2" || this.possibleRunsOrWicket == "3" ||
      this.possibleRunsOrWicket == "4" || this.possibleRunsOrWicket == "6" || this.possibleRunsOrWicket == "0") {
      this.totalRuns = +this.possibleRunsOrWicket;
      this.matchService.getMatch().setTotalRuns(this.totalRuns);
      this.matchService.getMatch().getBattingTeam().StrikeBatsman().getBatting().setRunsForPlayer(this.runsOnCurrentBall);
      this.matchService.getMatch().getBowlingTeam().getStrikeBowler().getBowling().setRunsGiven(this.runsOnCurrentBall);

      //switch striking batsman if there is 1 or 3 run
      if (this.possibleRunsOrWicket == "1" || this.possibleRunsOrWicket == "3") {
        this.matchService.getMatch().getBattingTeam().changeStrike();
      }
    } //increase count of total wicket if there is wicket
    else if (this.possibleRunsOrWicket == "Wicket") {                     
      this.matchService.getMatch().setTotalWickets();
      this.matchService.getMatch().getBowlingTeam().getStrikeBowler().getBowling().setWicketsTaken();
    }

    //set name for current batsmans
    if (this.showStrikeBatsman == true) {
      this.matchService.getMatch().getBattingTeam().StrikeBatsman().setName(this.strikeBatsman);
    }
    if (this.showNonStrikeBatsman == true) {
      this.matchService.getMatch().getBattingTeam().NonStrikeBatsman().setName(this.nonStrikeBatsman);
    }

    //show Srike and non-strike batsman choise when its wicket on ball 
    if (this.possibleRunsOrWicket == "Wicket") {
      this.showNonStrikeBatsman = true;
      this.showStrikeBatsman = true;
    }
    else {
      this.showNonStrikeBatsman = false;
      this.showStrikeBatsman = false;
    }

    //set the current balls details to the commentry array
    this.matchService.getMatch().setCommentry(this.currentBall, this.currentOver, this.currentBowler,
      this.matchService.getMatch().getBattingTeam().StrikeBatsman().getName(), this.runsOnCurrentBall, this.description,
      this.currentBowler);

    //set state first inning is over
    if (this.matchService.getMatch().getCurrentOver() >= this.matchService.getMatch().getOversForTheMatch() - 1 && this.currentBall == 6) {
      this.matchService.getMatch().firstinningEnd();
      this.matchService.setMatchState();
      this.showStrikeBatsman = true;
      this.showNonStrikeBatsman = true;
      this.firstInningCompleteNotification = true;

      //switch batting and bowling team after first inning complete
      if (this.matchService.getMatch().getBattingTeam() == this.matchService.getMatch().getTeam1()) {
        this.battingPlayers = this.matchService.getMatch().getTeam2().getPlayer();
      }
      else {
        this.battingPlayers = this.matchService.getMatch().getTeam1().getPlayer();
      }
      if (this.matchService.getMatch().getBowlingTeam() == this.matchService.getMatch().getTeam1()) {
        this.fieldingPlayers = this.matchService.getMatch().getTeam2().getPlayer();
      }
      else {
        this.fieldingPlayers = this.matchService.getMatch().getTeam1().getPlayer();
      }
    }
  }

  onClearClick() {
    this.currentBowler = "";
    this.strikeBatsman = "";
    this.nonStrikeBatsman = "";
    this.runsOnCurrentBall = 0;
    this.currentBowler = "";
    this.description = "";
  }
}
