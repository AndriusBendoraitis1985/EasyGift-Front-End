import {Injectable, EventEmitter} from '@angular/core';
import {Occasion} from '../models/occasion.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {
  occasionSelection = new EventEmitter<Occasion>();
  private readonly occasionsUrl: string;

  constructor(private http: HttpClient) {
    this.occasionsUrl = 'http://localhost:8080/events';
  }

  public findAll(): Observable<Occasion[]> {
    return this.http.get<Occasion[]>(this.occasionsUrl);
  }
}
