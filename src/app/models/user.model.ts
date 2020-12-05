import {Role} from './role.model';

export class User {
  public userId: number;
  public userName: string;
  public password: string;
  public email: string;
  public logoPath: string;
  public role: Role;

  constructor(userName: string, password: string, email: string, logoPath: string, role: Role) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.logoPath = logoPath;
    this.role = role;
  }
}
