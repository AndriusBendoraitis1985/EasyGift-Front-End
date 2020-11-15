import {Injectable, EventEmitter} from '@angular/core';
import {HistoryEntry} from '../models/history-entry.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  selectedHistoryEntry = new EventEmitter<HistoryEntry>();

  private historyUrl = 'http://localhost:8080/history';

  constructor(private http: HttpClient) {
  }

  public getAllHistoryEntries(): Observable<HistoryEntry[]> {
    return this.http.get<HistoryEntry[]>(this.historyUrl);
  }

  public addNewHistoryEntry(newHistoryEntry): Observable<HistoryEntry> {
    return this.http.post<HistoryEntry>(this.historyUrl, newHistoryEntry);
  }
}
