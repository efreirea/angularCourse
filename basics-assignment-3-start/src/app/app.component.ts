import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  timesClicked = 0;
  clickLogs = [];

  onButtonClicked (){
    this.displayParagraph = ! this.displayParagraph;
    this.timesClicked+=1;
    this.clickLogs.push(this.timesClicked);
  }
}
