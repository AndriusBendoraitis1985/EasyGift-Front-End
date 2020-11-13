import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user-service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  userName = '';
  tempUserName = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    console.log('hello from user list');
  }

  filterUsersByName() {
    console.log('username set ' + this.userName);
    this.userName = this.tempUserName;
  }
}
