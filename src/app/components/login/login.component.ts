import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = {
    id:0,
    fullname:'',
    username:'',
    email:'',
    password:'',
    phone:''
  }

  constructor(private authService: AuthService, private router: Router) { }
  login() {
    this.authService.login(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      },
      err => console.error(err)
    );
  }
}