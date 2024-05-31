import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public ob:Router, public on: OnlineserviceService){

  }

  result:any
  status: string=""

  login(data:any)
{
this.on.loginUser(data).subscribe(c=> {this.result= c.message[0].cnt
if(this.result > 0)
  {
    sessionStorage.setItem("u",data.uname)
    this.ob.navigate(['products'])
    
  }
  else
  {
    this.status="invalid user"
  }

})
}
}
