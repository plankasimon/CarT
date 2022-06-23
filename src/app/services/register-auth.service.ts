import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserR } from '../interfaces/user-r';

@Injectable({
  providedIn: 'root'
})
export class RegisterAuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:31000/api/v1/user';


}
