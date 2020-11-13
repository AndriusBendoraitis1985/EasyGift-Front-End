import {Component, OnInit} from '@angular/core';
import {HistoryEntry} from './history-entry.model';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  historyEntries: HistoryEntry[];

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
    this.historyEntries = this.historyService.getHistoryEntries();
  }

  onSelectLink(historyEntry: HistoryEntry) {
    this.historyService.selectedHistoryEntry.emit(historyEntry);
  }
}
