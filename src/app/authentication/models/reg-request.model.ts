export class RegRequest {
  public userName: string;
  public password: string;
  public email: string;
  public logoPath: string;

  constructor(userName: string, password: string, email: string, logoPath: string) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.logoPath = logoPath;
  }
}

