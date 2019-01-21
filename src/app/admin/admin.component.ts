import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from '../Services/match.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    switch (this.matchService.getMatchState()) {
      case this.matchService.match_state_not_started:
        this.router.navigate(['newmatch'], { relativeTo: this.route });
        break;
      case this.matchService.match_state_match_defined:
        this.router.navigate(['defineteams'], { relativeTo: this.route });
        break;
      case this.matchService.match_state_first_inning_started:
        this.router.navigate(['updateinning'], { relativeTo: this.route });
        break;
      case this.matchService.match_state_teams_defined:
        this.router.navigate(['updateinning'], { relativeTo: this.route });
        break;
      case this.matchService.match_state_second_inning_started:
        this.router.navigate(['updateinning'], { relativeTo: this.route });
        break;
      case this.matchService.match_state_first_inning_end:
        this.router.navigate(['updateinning'], { relativeTo: this.route });
        break;
    }
  }
}
