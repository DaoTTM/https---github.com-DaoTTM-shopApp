import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User = {
    id:0,
    fullname:'',
    username:'',
    email:'',
    password:'',
    phone:''
  }

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      res => this.router.navigate(['login']),
      err => console.error(err)
    );
  }
}
