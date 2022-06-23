import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  url = 'http://localhost:31000/api/v1/user/login';

  onUserLogin(): void{
    const user = this.loginForm.getRawValue();  
    const serializedUser = JSON.stringify(user);
    const header = new HttpHeaders({"content-type":"application/json"})
    this.http.post(this.url, serializedUser, {headers: header}).subscribe(
      (res) => {
        console.log(res),
        this.loginForm.reset(),
        this.router.navigate(['']),
        localStorage.getItem('token', )
        localStorage.setItem('token', 'Basic ' )
      },
      (err)=> console.log(err)
      
    )
   }

  ngOnInit(): void {

    
  }



}
