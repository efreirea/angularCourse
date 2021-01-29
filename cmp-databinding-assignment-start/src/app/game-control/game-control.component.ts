import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalRef;
  gameInProgress: boolean = false;
  counter: number = 0;
  @Output() incremented = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    if(!this.gameInProgress){
      this.intervalRef = setInterval(() => {
        console.log("Emitted: "+this.counter);
        this.incremented.emit(this.counter++);
      },1000);
      this.gameInProgress = true;
    }
  }

  stopGame() {
    if(this.gameInProgress){
      this.intervalRef = clearInterval(this.intervalRef);
      this.gameInProgress = false;
    }
  }

}
