import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
//   result: number
// constructor(ob: OnlineserviceService){
//    this.result = ob.add(52,5)
// }

result: string="";
pId: any;
pName: any;
pPrice: any;
pQty: any;
pImage: any;

qty: number=0;

constructor(public on: OnlineserviceService, public r: ActivatedRoute){

  r.queryParamMap.subscribe(obj => {this.pId = obj.get('pid')
  this.pName = obj.get('pname')
  this.pPrice = obj.get('price')
  this.pQty = obj.get('qty')
  this.pImage = obj.get('pimage')
})
}

placeorder()
{

  var res={
    username:sessionStorage.getItem("u"),
        pid:this.pId,
        transdate:new Date(),
        qty:this.qty
  }
  this.on.buy(res).subscribe(c=> alert(c.message))

}

}
