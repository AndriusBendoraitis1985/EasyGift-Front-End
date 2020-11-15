export class Gift {
  public giftId: number;
  public giftDescription: string;
  public imaginePath: string;
  public rating: number;

  constructor(giftDescription: string, imaginePath: string, rating: number) {
    this.giftDescription = giftDescription;
    this.imaginePath = imaginePath;
    this.rating = rating;
  }
}

