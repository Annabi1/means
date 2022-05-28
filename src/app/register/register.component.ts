import { map } from 'rxjs';
import { response } from 'express';
import { User } from './../../model/User';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messageError= "string";
  constructor(  private _flash:FlashMessagesService,private userServiceService:UserServiceService,private route:Router) {

  }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm):any
  {
    let user: User = {
      name:f.value.username ,
      email:f.value.email ,
      password: f.value.password
    }
    if (!f.value.username || !f.value.email || !f.value.password) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }else
    {
      this.userServiceService.createAccount(user).subscribe
      ({
        next: (response) => {

          if(!response.success)
          {
            this._flash.show(f.value.email+" "+response.message,{cssClass:'alert-danger'})

            console.log(response.message)
          }
          else{
            this.route.navigate(['/login'])


          }



        }
    })
    }
    }

  }


