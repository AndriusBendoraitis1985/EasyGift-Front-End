import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Gift} from '../models/gift.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private readonly giftsUrl = 'http://localhost:8080/gifts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) {
  }

  public getAllGifts(): Observable<Gift[]> {
    return this.http.get<Gift[]>(this.giftsUrl, this.httpOptions);
  }

  public deleteGiftById(index: number): Observable<Gift> {
    return this.http.delete<Gift>(this.giftsUrl + '/' + index, this.httpOptions);
  }

  public getGiftById(index: number): Observable<Gift> {
    return this.http.get<Gift>(this.giftsUrl + '/' + index, this.httpOptions);
  }

  public updateGift(gift: Gift): Observable<Gift> {
    return this.http.put<Gift>(this.giftsUrl + '/' + gift.giftId, gift, this.httpOptions);
  }

}
