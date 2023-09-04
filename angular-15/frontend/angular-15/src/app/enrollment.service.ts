import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url='http://127.0.0.1:2000/register';

  constructor(private _http:HttpClient) { }

  enroll(user: UserData){

    const params = new HttpParams()
      .set('username', user.username)
      .set('password', user.password);

    return this._http.get(this._url,{params});
  }
}
