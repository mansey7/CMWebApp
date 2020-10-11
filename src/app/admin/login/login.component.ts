import { AuthService } from './../../auth/auth.service';
import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:  AuthService, public  router:  Router) { }

  ngOnInit(): void {
    

  }
  async login(email:string,password:string){
    console.log('xxx');
     await this.authService.login(email,password);
    
 
  }

}
