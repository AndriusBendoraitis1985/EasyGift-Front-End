import {Injectable} from '@angular/core';
import {Occasion} from '../models/occasion.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gift} from '../models/gift.model';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {
  private readonly occasionsUrl = 'http://localhost:8080/events';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) {
  }

  public getAllOccasions(): Observable<Occasion[]> {
    console.log('from occasion service');
    return this.http.get<Occasion[]>(this.occasionsUrl, this.httpOptions);
  }

  public getOccasionById(index: number): Observable<Occasion> {
    return this.http.get<Occasion>(this.occasionsUrl + '/' + index, this.httpOptions);
  }

  public deleteOccasionById(index: number): any {
    return this.http.delete(this.occasionsUrl + '/' + index, this.httpOptions);
  }

  public addNewGift(occasionId: number, gift: { rating: number; imaginePath: string; giftDescription: string }): Observable<Gift> {
    return this.http.post<Gift>(this.occasionsUrl + '/' + occasionId + '/new', gift, this.httpOptions);
  }

  public updateOccasion(occasion: Occasion): Observable<Occasion> {
    return this.http.put<Occasion>(this.occasionsUrl + '/' + occasion.occasionId + '/edit', occasion, this.httpOptions);
  }

  public createOccasion(occasion: Occasion): Observable<Occasion> {
    return this.http.post<Occasion>(this.occasionsUrl + '/new', occasion, this.httpOptions);
  }
}
