import {Gift} from '../../shared/gift.model';

export class Occasion {
  public id: number;
  public userName: string;
  public userSurname: string;
  public type: string;
  public date: Date;
  public gifts: Gift [];


  constructor(userName: string, userSurname: string, type: string, date: Date, gifts: Gift[]) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.type = type;
    this.date = date;
    this.gifts = gifts;
  }
}
