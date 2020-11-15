import {Injectable} from '@angular/core';
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

}
