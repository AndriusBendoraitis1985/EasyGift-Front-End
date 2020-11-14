import {Gift} from '../shared/gift.model';

export class Occasion {
  public occasionId: number;
  public userName: string;
  public userSurname: string;
  public type: string;
  public occasionDate: Date;
  public gifts: Gift [];


  constructor(userName: string, userSurname: string, type: string, occasionDate: Date, gifts: Gift[]) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.type = type;
    this.occasionDate = occasionDate;
    this.gifts = gifts;
  }
}
