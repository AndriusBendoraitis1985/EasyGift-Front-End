import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Occasion} from '../models/occasion.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly occasionsUrl = 'http://localhost:8080/dashboard';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) {
  }

  public getAllOccasionsForMonthPeriod(): Observable<Occasion[]> {
    console.log('from occasion service');
    return this.http.get<Occasion[]>(this.occasionsUrl + '/month', this.httpOptions);
  }

  public getOccasionsOfAuthorisedUser(): Observable<Occasion[]> {
    console.log('from occasion service');
    return this.http.get<Occasion[]>(this.occasionsUrl + '/byUser/' + localStorage.getItem('userName').toLowerCase(), this.httpOptions);
  }

}
