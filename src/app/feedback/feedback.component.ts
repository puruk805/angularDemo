import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  fg: any
  constructor()
  {
    this.fg = new FormGroup({
  username:new FormControl("admin", [Validators.required]),
  email:new FormControl("", [Validators.email]),
  message:new FormControl("Validator", [Validators.maxLength(10)]),
  age:new FormControl("", [ageValidator])
    })}


    showdata(frm: any){
      if(this.fg.valid){
        alert(frm.username+"\n"+frm.email+"\n"+frm.message+"\n"+frm.age)
      }else{
        alert("Error occured")
      }
    }
}


export function ageValidator(txt: AbstractControl){
// txt contain age value, state, properties
  var data = parseInt(txt.value)
  if(data >18){
    return null;//don't display error
  }else{
    return{
      age: true
    }
  }
}