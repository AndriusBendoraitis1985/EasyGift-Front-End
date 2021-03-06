import {User} from './user.model';

export class HistoryEntry {
  public historyEntryId: number;
  public userName: string;
  public userSurname: string;
  public historyType: string;
  public historyDate: Date;
  public historyDescription: string;
  public historyImaginePath: string;
  public user: User;

  constructor(
    name: string,
    surname: string,
    historyType: string,
    historyDate: Date,
    historyDescription: string,
    historyImaginePath: string,
    user: User
  ) {
    this.userName = name;
    this.userSurname = surname;
    this.historyType = historyType;
    this.historyDate = historyDate;
    this.historyDescription = historyDescription;
    this.historyImaginePath = historyImaginePath;
    this.user = user;
  }
  }
