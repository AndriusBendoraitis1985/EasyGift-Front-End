import {User} from '../../models/user.model';

export class AuthResponse {
  public token: string;
  public user: User;

  constructor(token: string, user: User) {
    this.token = token;
    this.user = user;
  }
}

