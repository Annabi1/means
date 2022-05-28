import { response } from 'express';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from'../../model/User'
import {Task} from'../../model/tacks'
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http:HttpClient) { }
  createAccount(user:User):Observable<any>
  {
return this._http.post("http://localhost:3002/usersAuth/register",user).pipe( map(data =>data))


}
login(user:User):Observable<any>
{
  return this._http.post("http://localhost:3002/usersAuth/login",user).pipe(map(data=>data))
}
estConnecte() {
  let token = localStorage.getItem('my_token');
  return !!token;
}
logout() {
  localStorage.removeItem('my_token');
}
getTasks():Observable< Task[]> {
  return this._http.get<Task[]>("http://localhost:3002/users/list");
}
}
