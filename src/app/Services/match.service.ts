import { Injectable } from '@angular/core';
import { Match } from '../Models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  readonly match_state_not_started = 0;
  readonly match_state_match_defined = 1;
  readonly match_state_teams_defined = 2;
  readonly match_state_first_inning_started = 3;
  readonly match_state_first_inning_end = 4;
  readonly match_state_second_inning_started = 5;
  readonly match_state_second_inning_end = 6;
  readonly match_state_match_finished = 7;

  private match: Match;
  private matchState: number;

  constructor() {
    this.match = new Match();
    this.matchState = this.match_state_not_started;
  }

  getMatchState(): number {
    return this.matchState;
  }

  setMatchState() {
    this.matchState++;
  }
  
  getMatch() {
    return this.match;
  }
}
