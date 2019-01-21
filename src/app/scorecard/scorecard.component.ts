import { Component, OnInit } from '@angular/core';
import { MatchService } from '../Services/match.service';
import { Players } from '../Models/Players';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  public previosInningScore = false;
  strikebatsmanName;
  constructor(public matchService: MatchService) {
    if (matchService.getMatchState() == matchService.match_state_second_inning_started) {
      this.previosInningScore = true;
    }
  }
  ngOnInit() {
  }
}
