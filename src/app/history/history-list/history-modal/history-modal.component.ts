import {Component, Input, OnInit} from '@angular/core';
import {HistoryEntry} from '../../../models/history-entry.model';
import {HistoryService} from '../../../services/history.service';

@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.css']
})
export class HistoryModalComponent implements OnInit {
  historyEntry: HistoryEntry;


  constructor(private historyService: HistoryService) {
    this.historyService.selectedHistoryEntry.subscribe(
      (historyEntry: HistoryEntry) => {
        this.historyEntry = historyEntry;
      });
  }

  ngOnInit(): void {

  }
}
