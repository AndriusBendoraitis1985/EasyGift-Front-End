import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  showEditElement = false;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem('userRole') === 'ADMIN') {
      this.showEditElement = true;
    } else {
      this.showEditElement = false;
    }
  }
}
