import {Injectable, EventEmitter} from '@angular/core';
import {HistoryEntry} from '../models/history-entry.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  selectedHistoryEntry = new EventEmitter<HistoryEntry>();
  private readonly historyUrl: string;

  constructor(private http: HttpClient) {
    this.historyUrl = 'http://localhost:8080/history';
  }

  public finAll(): Observable<HistoryEntry[]> {
    return this.http.get<HistoryEntry[]>(this.historyUrl);
  }

  public addNewHistoryEntry(newHistoryEntry: HistoryEntry): void {
    // this.historyEntries.push(newHistoryEntry);
  }
}
