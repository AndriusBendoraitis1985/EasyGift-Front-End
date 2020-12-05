import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = 'non authorized';
  userLoggedIn = false;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem('userName')){
      this.userName = localStorage.getItem('userName');
      this.userLoggedIn = true;
    }
  }

}
