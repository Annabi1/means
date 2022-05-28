import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"addUser",component:AddUserComponent
  },
  {
    path:'login', component:LoginComponent

  },
  {
    path:'addUser', component:AddUserComponent

  },
  {
    path:'home', component:HomeComponent

  },
  {
    path:'', component:LoginComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
