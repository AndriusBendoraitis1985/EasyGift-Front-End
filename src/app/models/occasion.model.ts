import {Gift} from './gift.model';

export class Occasion {
  public occasionId: number;
  public userName: string;
  public userSurname: string;
  public occasionType: string;
  public occasionDate: Date;
  public gifts: Gift [];


  constructor(userName: string, userSurname: string, occasionType: string, occasionDate: Date, gifts: Gift[]) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.occasionType = occasionType;
    this.occasionDate = occasionDate;
    this.gifts = gifts;
  }
}
