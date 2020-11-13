import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGiftService {

  private userGiftUrl: string;

  constructor(private http: HttpClient) {
    this.userGiftUrl = 'http://localhost:8080/usergift';
  }

  public findAll(): any {
    return this.http.get(this.userGiftUrl);
  }
}
