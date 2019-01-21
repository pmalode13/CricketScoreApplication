import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/Services/match.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
  team1name: string;
  team2name: string;
  toss: string;
  decision;
  overs: number;
  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit() {
  }

  onDefineTeamsClicked() {
    this.matchService.getMatch().setTeamname(this.team1name, this.team2name);
    this.matchService.getMatch().setTossWiningTeam(this.toss, this.decision);
    this.matchService.getMatch().setOversForMatch(this.overs);

    this.matchService.setMatchState();
    this.router.navigate(['Admin/defineteams']);
  }
  
  onClearClick() {
    this.team1name = "";
    this.team2name = "";
    this.toss = "";
    this.decision = "";
    this.overs = 0;
  }
}
