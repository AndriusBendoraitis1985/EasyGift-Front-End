import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gift} from '../models/gift.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private readonly giftsUrl = 'http://localhost:8080/gifts';

  constructor(private http: HttpClient) {
  }

  public getAllGifts(): Observable<Gift[]> {
    return this.http.get<Gift[]>(this.giftsUrl);
  }

  public deleteGiftById(index: number): Observable<Gift> {
    return this.http.delete<Gift>(this.giftsUrl + '/' + index);
  }

  public getGiftById(index: number): Observable<Gift> {
    return this.http.get<Gift>(this.giftsUrl + '/' + index);
  }

  public updateGift(gift: Gift): Observable<Gift> {
    return this.http.put<Gift>(this.giftsUrl + '/' + gift.giftId, gift);
  }

}
