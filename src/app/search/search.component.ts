import { Component } from '@angular/core';
import { IProd, OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

 prod: IProd[] = []
 data: any;
 name: string=""
 p: IProd[] = []

  constructor(public on: OnlineserviceService, public r: ActivatedRoute){

    this.prod = on.prod;
    r.queryParamMap.subscribe(obj => {
    this.data = obj.get('s')
  })

this.p = this.prod.filter(c => c.pname.toLowerCase().includes(this.data.toLowerCase()))


}

}
