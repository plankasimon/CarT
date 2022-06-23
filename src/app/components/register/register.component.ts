import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('' , [Validators.required, Validators.maxLength(3)])
  })

  constructor(private http: HttpClient,
              private router: Router) { }


  
  url = 'http://localhost:31000/api/v1/user/register';
   onUserCreate(): void{
    const user = this.registerForm.getRawValue();  
    console.log(user)
    const serializedUser = JSON.stringify(user);
    console.log(serializedUser);
    const header = new HttpHeaders({"content-type":"application/json"})
    this.http.post(this.url, serializedUser, {headers: header}).subscribe(
      (res) => {
        console.log(res),
        this.registerForm.reset(),
        this.router.navigate(['login'])
      }
      
    )
   }

  ngOnInit(): void {
    
  }

}
