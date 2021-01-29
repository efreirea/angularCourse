import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class ServerElementComponent implements OnInit, 
  OnChanges, DoCheck, AfterContentInit ,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srvElement') element: {type:string,name:string,content:string};
  @ViewChild('heading',{static:true}) header:ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef; 

  constructor() {
    console.log('constructor called');
  }
  ngOnDestroy(): void {
    console.log("OnDestroy called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChcked called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChcked called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
  }

}
