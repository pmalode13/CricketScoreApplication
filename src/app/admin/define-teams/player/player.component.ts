import { Component, OnInit, Input } from '@angular/core';
import { Players } from 'src/app/Models/Players';

@Component({
  selector: 'app-team-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Players;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }
  setName(event) {
    const element: HTMLInputElement = event.target;
    this.player.setName(element.value);
  }
}
