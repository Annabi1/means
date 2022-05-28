import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public tasks:any
  constructor(private auth:UserServiceService, private route:Router) { }

  ngOnInit(): void {
    this.auth.getTasks().subscribe(
      data=>
      {
this.tasks=data
      }
    )
  }
  addUser()
  {
    this.route.navigate(['/addUser'])
  }
  updateUser(){
    this.route.navigate(['/addUser'])

  }
}
