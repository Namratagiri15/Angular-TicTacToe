import { Component, Output, EventEmitter} from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  constructor(private gameService: GameService) {
  }

  board = this.gameService.board;
  winner;
  
  onMakingMove() {
    this.gameService.onPlay();
    this.winner = this.gameService.winnerPlayer;
  }  
}