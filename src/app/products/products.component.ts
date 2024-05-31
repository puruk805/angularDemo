import { Component } from '@angular/core';
import { OnlineserviceService, IProd } from '../onlineservice.service';
import { DiscountPipe } from '../discount.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [OnlineserviceService]
})
export class ProductsComponent {

  hide = true;
  prod: IProd[] = []

  toggleHide(){
    this.hide = !this.hide;
  }
 
constructor( public on: OnlineserviceService){
//  this.prod = on.prod
 on.showproduct().subscribe(result => this.prod = result)
}
}


