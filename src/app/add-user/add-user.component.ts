import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {

  }
  addUser(){
this.route.navigate(['/addUser'])
  }
}
