import { response } from 'express';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/model/User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserServiceService } from '../services/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _flash:FlashMessagesService,private userServiceService:UserServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm):any
  {
    {
      let user: User = {
        name:"" ,
        email:f.value.email ,
        password: f.value.password
      }
      if (!f.value.email || !f.value.password) {
        this._flash.show('All fields are required', { cssClass: 'alert-danger' });
        return false;
      }
    else
    {
      this.userServiceService.login(user).subscribe
      ({
        next: (response) => {

          if(!response.success)
          {
            this._flash.show(response.message,{cssClass:'alert-danger'})
          }
          else{
            localStorage.setItem('my_token', response['token']);
            if(this.userServiceService.estConnecte())
            {
              this.route.navigate(['/home'])
            }

            console.log(response)


          }



        }
    })
    }
    }

  }

    }
