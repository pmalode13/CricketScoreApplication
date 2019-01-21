import { Component, OnInit } from '@angular/core';
import { MatchService } from '../Services/match.service';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public nav: HeaderService) {
  }

  ngOnInit() {
  }
}
