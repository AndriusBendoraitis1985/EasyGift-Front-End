import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../../services/history.service';
import {HistoryEntry} from '../../../models/history-entry.model';

@Component({
  selector: 'app-user-responsible-list',
  templateUrl: './user-responsible-list.component.html',
  styleUrls: ['./user-responsible-list.component.css']
})
export class UserResponsibleListComponent implements OnInit {
  historyEntriesByResponsibleUser: HistoryEntry[];

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
    this.historyService
      .getHistoryEntriesByResponsibleUser()
      .subscribe((data: HistoryEntry[]) => {
        this.historyEntriesByResponsibleUser = data;
      });
  }

}
