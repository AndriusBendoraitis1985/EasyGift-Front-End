import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = 'non authorized';
  logoPath: string;
  userLoggedIn = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
      this.userLoggedIn = true;
    }
    if (localStorage.getItem('logoPath')) {
      this.logoPath = localStorage.getItem('logoPath');
    }
  }

  onLogOut(): void {
    localStorage.clear();
    this.router.navigate(['/home/security/sign-in']).then(r => location.reload());
  }
}
