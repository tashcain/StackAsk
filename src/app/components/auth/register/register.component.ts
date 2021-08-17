import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  username: string;
  password: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.username || !this.email || !this.password) {
      alert('provide credentials');
      return;
    }

    const credentials = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.loginService.register(credentials).subscribe(
      (response: any) => {
        window.location.href = '/login';
        alert('You have been registered successfully login to continue');
      },
      (error) => {
        alert('User is already registered');
        console.log(error);
      }
    );

    this.username = '';
    this.email = '';
    this.password = '';
  }
}
