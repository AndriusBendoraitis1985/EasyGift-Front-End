import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {RegRequest} from '../authentication/models/reg-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly usersUrl = 'http://localhost:8080/users';
  private readonly userUrl = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, this.httpOptions);
  }

  public createNewUser(regRequest: RegRequest): Observable<RegRequest> {
    return this.http.post<RegRequest>(this.userUrl + '/new', regRequest, this.httpOptions);
  }

  public getUserByUserName(userName: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + userName, this.httpOptions);
  }
}
