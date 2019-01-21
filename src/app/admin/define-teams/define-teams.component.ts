import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/Services/match.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-define-teams',
  templateUrl: './define-teams.component.html',
  styleUrls: ['./define-teams.component.css']
})
export class DefineTeamsComponent implements OnInit {

  constructor(public matchService: MatchService, private router: Router, ) { }

  ngOnInit() {
  }

  onStartMatchClick() {
    if (this.matchService.getMatch().getTeam1().isTeamComplete()) {
      this.matchService.setMatchState();
      this.router.navigate(['Admin/updateinning']);
    }
  }
}
