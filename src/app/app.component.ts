import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineShop';

  constructor(public r: Router){
  }
  show(){
    var res = (document.getElementById('txtSearch') as HTMLInputElement).value;
    this.r.navigate(['search'], {queryParams: {'s':res}})
    }
  
}
