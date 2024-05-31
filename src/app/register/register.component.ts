import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  status: string=""
  // onRegistrationValidate(frm: any){

  // }
  constructor(public ob:OnlineserviceService){}
  validate(frm:any)
  {
   this.ob.Addnewuser(frm).subscribe(result => alert(result.message))
    
  }
}
