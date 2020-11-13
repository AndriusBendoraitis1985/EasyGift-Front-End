import {Component, Input, OnInit} from '@angular/core';
import {HistoryEntry} from '../history-entry.model';
import {HistoryService} from '../../history.service';

@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.css']
})
export class HistoryModalComponent implements OnInit {
  historyEntry: HistoryEntry = {
    name: '',
    surname: '',
    occasionType: '',
    date: new Date(''),
    description: '',
    link: ''
  };

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
    this.historyService.selectedHistoryEntry.subscribe(
      (historyEntry: HistoryEntry) => {
        this.historyEntry = historyEntry;
      });
  }
}
