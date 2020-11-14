import {Component, OnInit} from '@angular/core';
import {HistoryEntry} from '../../models/history-entry.model';
import {HistoryService} from '../../services/history.service';

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
    this.historyService.finAll().subscribe(
      data => {
        this.historyEntries = data;
      });
  }

  onSelectLink(historyEntry: HistoryEntry): void {
    this.historyService.selectedHistoryEntry.emit(historyEntry);
  }
}
