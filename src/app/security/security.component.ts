import {Component, OnInit} from '@angular/core';
import {JwtClientService} from '../services/jwt-client.service';
import {AuthResponse} from '../models/authorization/auth-response.model';
import {AuthRequest} from '../models/authorization/auth-request.model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  authRequest: AuthRequest = {
    userName: 'Marge',
    password: '123'
  };

  constructor(private jwtClientService: JwtClientService) {
  }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest): void {
    const response = this.jwtClientService.generateToken(authRequest);
    response.subscribe((data: AuthResponse) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', String(data.user.userId));
      localStorage.setItem('userName', data.user.userName);
      localStorage.setItem('email', data.user.logoPath);
      localStorage.setItem('userRole', data.user.role.name.substr(5));
      console.log(data.token);
      console.log(data.user);
    });
  }
}
