import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
    board = ['-','-','-',
             '-','-','-',
             '-','-','-'];

    currentPlayer = '0';
    winnerPlayer = '';
    gameOver = false;

    onPlay() {
        let positionId = ((<HTMLInputElement>event.target).offsetParent.id);
        let positionEl = (<HTMLInputElement>event.target)
        if(positionEl.innerHTML != ('X' || '0') &&  positionEl.innerHTML=='-' )  {
          positionEl.innerHTML = this.whosTurn();
          this.board[positionId] = positionEl.innerHTML;
        } else {
          alert("Not allowed to insert here!")
        }
        this.checkWinner();
    }

    whosTurn() {
        if(this.currentPlayer === 'X') {
          this.currentPlayer = '0';
          return '0';
        }
        this.currentPlayer = 'X';
        return 'X';
    }

    checkWinner() {
        this.colWin(0);
        this.colWin(3);
        this.colWin(6);
        this.rowWin(0);
        this.rowWin(1);
        this.rowWin(3);
        this.digWin(0,8);
        this.digWin(2,6);
        this.tie();
    }

    tie() {
        for (let i=0; i<=8; i++) {
            if (this.board[i] == '-') {
                this.gameOver = false;
                return;
            } else {
                this.gameOver = true;
            }
        }
        if(this.gameOver == true) {
            alert('Its a tie');
        }
    }

    colWin(i) {
        if(this.board[i]==this.board[i+1] && this.board[i]==this.board[i+2] && this.board[i]!='-') {
          this.winnerPlayer = this.currentPlayer;
          alert(this.currentPlayer + " won")
        }
    }
    
    rowWin(i) {
        if(this.board[i]==this.board[i+3] && this.board[i]==this.board[i+6] && this.board[i]!='-') {
            this.winnerPlayer = this.currentPlayer;
            alert(this.currentPlayer + " won")
        }
    }

    digWin(start, end) {
        if(this.board[start]==this.board[4] && this.board[start]== this.board[end] && this.board[start]!='-') {
            this.winnerPlayer = this.currentPlayer;
            alert(this.currentPlayer + " won!")
        }
    }
}