import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  ngOnDestroy(): void {
    console.log("On destroy called")
  }
  ngDoCheck(): void {
    console.log("Do check triggered")
  }

  ngOnInit():void{
   console.log("Init here")
  }

  ngOnChanges(changes: SimpleChanges):void{
      console.log(changes)
  }

  @Input()
  childData: string =''

  @Output()
  myevent:EventEmitter<string> = new EventEmitter<string>
  sendmeassge(){
    this.myevent.emit("Message from child....")
  }
}
