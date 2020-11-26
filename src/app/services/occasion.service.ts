import {Injectable, EventEmitter} from '@angular/core';
import {Occasion} from '../models/occasion.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gift} from '../models/gift.model';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {
  private readonly occasionsUrl = 'http://localhost:8080/events';

  constructor(private http: HttpClient) {
  }

  public getAllOccasions(): Observable<Occasion[]> {
    console.log('from occasion service');
    return this.http.get<Occasion[]>(this.occasionsUrl);
  }

  public addLike(giftId: number, occasion: Occasion): Observable<Gift> {
    return this.http.put<Gift>(this.occasionsUrl + '/gifts/' + giftId, occasion);
  }

  public getOccasionById(index: number): Observable<Occasion> {
    return this.http.get<Occasion>(this.occasionsUrl + '/' + index);
  }

  public deleteOccasionById(index: number): any {
    return this.http.delete(this.occasionsUrl + '/' + index);
     }

  public addNewGift(occasionId: number, gift: { rating: number; imaginePath: string; giftDescription: string }): Observable<Gift> {
    return this.http.post<Gift>(this.occasionsUrl + '/' + occasionId + '/new', gift);
  }

  public updateOccasion(occasion: Occasion): Observable<Occasion> {
    return this.http.put<Occasion>(this.occasionsUrl + '/' + occasion.occasionId + '/edit', occasion);
  }
}



