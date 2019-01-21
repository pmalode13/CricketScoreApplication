import { Component, OnInit } from '@angular/core';
import { MatchService } from '../Services/match.service';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.css']
})
export class CommentryComponent implements OnInit {
  public inningComplete = false;
  constructor(public matchService: MatchService) {
  }

  ngOnInit() {
  }

}
