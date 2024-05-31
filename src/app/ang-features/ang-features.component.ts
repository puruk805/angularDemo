import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-features',
  templateUrl: './ang-features.component.html',
  styleUrl: './ang-features.component.css'
})
export class AngFeaturesComponent {

  b: boolean = false;
  type: number= 1
  countries: string[] = ["India", "US", "UK", "CANADA", "Japan"]


  show(){
    this.b = !this.b;
  }
}
