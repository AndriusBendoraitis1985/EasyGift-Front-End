import {Component, OnInit} from '@angular/core';
import {RegRequest} from '../../models/reg-request.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  regRequest: RegRequest = {userName: '', password: '', email: '', logoPath: ''};

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.createNewUser(this.regRequest).subscribe();
  }

}
