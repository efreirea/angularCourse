import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIncremented(countIncrement:number){
    if(countIncrement % 2 === 0){
      this.evenNumbers.push(countIncrement);
    }else{
      this.oddNumbers.push(countIncrement);
    }
  }
}
