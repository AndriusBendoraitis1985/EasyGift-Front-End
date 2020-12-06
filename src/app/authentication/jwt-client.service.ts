import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private authenticateUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public generateToken(request): Observable<any> {
    return this.http.post(this.authenticateUrl + '/authenticate', request);
  }
}


