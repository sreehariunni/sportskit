import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path :'',component:LoginComponent},
  // {path :'movie',component: MovieComponent},login
  // {path:'**',component:LoginComponent},
  {path :'register',component: RegisterComponent},
  {path :'login',component: FrontpageComponent},
  {path :'contactus',component: ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }