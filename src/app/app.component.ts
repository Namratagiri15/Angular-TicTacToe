import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(private gameService: GameService){
  }

  title = 'Tic-Tac-Toe';
  player1;
  player2;
  winnerPlayer = '';

  interval = setInterval(()=>{
    let winner = this.gameService.winnerPlayer;
    if(winner === 'X') {
       this.winnerPlayer = this.player1;
    } else if(winner === '0') {
      this.winnerPlayer = this.player2;
    }
  },1000);

  playAgain() {
    window.location.reload();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
