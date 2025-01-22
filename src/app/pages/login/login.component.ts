import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginObj : any = {
      username: '',
      password: '',
    }

    router = inject(Router)

    onLogin() {
      if(this.loginObj.username === 'admin' && this.loginObj.password === '1234') {
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Incorrect Credentials');
      }
    }
}
