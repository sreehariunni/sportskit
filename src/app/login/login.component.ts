import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

acno=""
psw=""
constructor(private router :Router,private ds:DataService)
{
}
  // login()
  // {
  //   if(this.username.trim().length==0)
  //   {
  //      this.errormsg="the username is requied";
  //   }
  //   else if(this.password.trim().length==0)
  //   {
  //     this.errormsg="the password is required";

  //   }
  //   else{
  //     this.errormsg="";
  //     this.router.navigateByUrl('movie')
  //   }
  // }

  
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "12345"},
    1001: { acno: 1001, username: "amal", password: "12345"}
  }
  
  login()
  {
   
  
   var acno=this.acno
   var psw=this.psw
    var userDetails=this.userDetails
  console.log(acno);
 

  const result= this.ds.login(acno,psw)

  if (result) {
    alert('Login success')
    this.router.navigateByUrl('login')
  } else {
    alert('invalid user')
    

  }
}
registerin()
{
  this.router.navigateByUrl("register")
}
}
