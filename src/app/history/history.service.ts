import {Injectable, EventEmitter} from '@angular/core';
import {HistoryEntry} from './history-list/history-entry.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  selectedHistoryEntry = new EventEmitter<HistoryEntry>();

  historyEntries: HistoryEntry [] = [
    new HistoryEntry('Kamile', 'Bendotaityte', 'birthday', new Date('2016-06-16'), 'doll', 'https://images-na.ssl-images-amazon.com/images/I/714yfUZN8WL._SY879_.jpg'),
    new HistoryEntry('Aleksandr', 'Cerniuk', 'christmas', new Date('2020-12-24'), 'workshop tools', 'https://cdn.goodao.net/jjfixman/145.jpg')
  ];

  constructor() {
  }

  getHistoryEntries(): HistoryEntry[] {
    return this.historyEntries;
  }

  addNewHistoryEntry(newHistoryEntry: HistoryEntry) {
    this.historyEntries.push(newHistoryEntry);

  }
}
