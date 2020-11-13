export class HistoryEntry {
  public name: string;
  public surname: string;
  public occasionType: string;
  public date: Date;
  public description: string;
  public link: string;

  constructor(name: string, surname: string, occasionType: string, date: Date, description: string, link: string) {
    this.name = name;
    this.surname = surname;
    this.occasionType = occasionType;
    this.date = date;
    this.description = description;
    this.link = link;
  }
}
