import {Component, Input, OnInit} from '@angular/core';
import {HistoryEntry} from '../../../../models/history-entry.model';

@Component({
  selector: 'app-user-responsible-item',
  templateUrl: './user-responsible-item.component.html',
  styleUrls: ['./user-responsible-item.component.css']
})
export class UserResponsibleItemComponent implements OnInit {

  @Input()
  history: HistoryEntry;

  constructor() {
  }

  ngOnInit(): void {
  }

}
