import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string | any;
  senha : string | any;  
  errorMessage = 'Invalid Credentials';
  successMessage: string | any;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username, this.senha);
    
    this.authenticationService.authenticationService(this.username, this.senha).subscribe((result)=> {
      console.log(result);
      
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/hello-world']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}