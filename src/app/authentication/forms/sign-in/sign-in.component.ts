import {Component, OnInit} from '@angular/core';
import {AuthRequest} from '../../models/auth-request.model';
import {JwtClientService} from '../../jwt-client.service';
import {AuthResponse} from '../../models/auth-response.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  authRequest: AuthRequest = {userName: '', password: ''};
  errorMessage = 'Wrong user name or password';
  showErrorMessage = false;

  constructor(private jwtClientService: JwtClientService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const response = this.jwtClientService.generateToken(this.authRequest);
    response.subscribe((data: AuthResponse) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('logoPath', data.user.logoPath);
      localStorage.setItem('userName', data.user.userName);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('userRole', data.user.role.name.substr(5));
      this.router.navigate(['../../', 'welcome'], {relativeTo: this.activeRoute}).then(r => location.reload());
    }, (error: HttpErrorResponse) => {
      this.showErrorMessage = true;
    });
  }
}
