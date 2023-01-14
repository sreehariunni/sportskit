import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})

export class FrontpageComponent {
  user=""
constructor(private router:Router,private ds:DataService){
  this.user=this.ds.currentuser
}


  logout(){
    alert(' Logout successfully')
    this.router.navigateByUrl('')
  }
}
