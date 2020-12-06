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
  newUserMsg = 'New user created! Please Sign in!';
  showMsg = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.createNewUser(this.regRequest).subscribe(result => {
      this.showMsg = true;
    }, (error => {
      console.log(error.message);
    }));
  }

}
