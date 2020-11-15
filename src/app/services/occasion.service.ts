import {Injectable, EventEmitter} from '@angular/core';
import {Occasion} from '../models/occasion.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {
  occasionSelection = new EventEmitter<Occasion>();

  private readonly occasionsUrl = 'http://localhost:8080/events';

  constructor(private http: HttpClient) {
  }

  public getAllOccasions(): Observable<Occasion[]> {
    console.log('from occasion service');
    return this.http.get<Occasion[]>(this.occasionsUrl);
  }
}
