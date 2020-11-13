import {Component, OnInit} from '@angular/core';
import {UserGift} from '../../model/user-gift';
import {UserGiftService} from '../../../services/user-gift-service/user-gift.service';
import {UserService} from '../../../services/user-service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-gift-list',
  templateUrl: './user-gift-list.component.html',
  styleUrls: ['./user-gift-list.component.css']
})
export class UserGiftListComponent implements OnInit {
  usersGift: UserGift[];
  users: User [];

  constructor(private userGiftService: UserGiftService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userGiftService.findAll().subscribe(data => {
      this.usersGift = data;
    });
    console.log('hello from users gift list');
  }
}
