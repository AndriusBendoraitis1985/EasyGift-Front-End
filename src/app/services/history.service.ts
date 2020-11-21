import {Injectable, EventEmitter} from '@angular/core';
import {HistoryEntry} from '../models/history-entry.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gift} from '../models/gift.model';
import {Occasion} from '../models/occasion.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  selectedHistoryEntry = new EventEmitter<HistoryEntry>();
  newHistoryEntry: HistoryEntry;

  private historyUrl = 'http://localhost:8080/history';

  constructor(private http: HttpClient, private router: Router) {
  }

  public getAllHistoryEntries(): Observable<HistoryEntry[]> {
    return this.http.get<HistoryEntry[]>(this.historyUrl);
  }

  public addNewHistoryEntry(newHistoryEntry): Observable<HistoryEntry> {
    return this.http.post<HistoryEntry>(this.historyUrl, newHistoryEntry);
  }

  public confirmAndBuy(gift: Gift, occasion: Occasion): void {
    const name = occasion.userName;
    const surname = occasion.userSurname;
    const type = occasion.occasionType;
    const date = occasion.occasionDate;
    const description = gift.giftDescription;
    const imagine = gift.imaginePath;

    this.newHistoryEntry = new HistoryEntry(name, surname, type, date, description, imagine);
    this.addNewHistoryEntry(this.newHistoryEntry).subscribe();
    this.router.navigate(['history']);
  }

}
