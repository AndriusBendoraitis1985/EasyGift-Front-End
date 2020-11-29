export class User {
  public userId: number;
  public userName: string;
  public password: string;
  public email: string;
  public logoPath: string;
  public role: string;

  constructor(userName: string, password: string, email: string, logoPath: string, role: string) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.logoPath = logoPath;
    this.role = role;
  }
}
