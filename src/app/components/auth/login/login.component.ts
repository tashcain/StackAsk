import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.username || !this.password) {
      alert('provide credentials');
      return;
    }

    const credentials = {
      username: this.username,
      password: this.password,
    };
    this.loginService.generateToken(credentials).subscribe(
      (response: any) => {
        console.log(response.token);
        this.loginService.loginUser(response.token);
        window.location.href = '/dashboard';
      },
      (error) => {
        alert('Invalid User');
        console.log(error);
      }
    );

    this.username = '';
    this.password = '';
  }
}
