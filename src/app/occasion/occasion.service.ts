import {Injectable, EventEmitter} from '@angular/core';
import {Occasion} from './occasion-list/occasion.model';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {
  occasionSelection = new EventEmitter<Occasion>();

  private occations: Occasion[] = [
    new Occasion(
      'https://images.heb.com/is/image/HEBGrocery/prd-small/h-e-b-white-cake-with-strawberry-bettercreme-icing-002118478.jpg',
      'Andrius',
      'Bendoraitis',
      'birthday',
      new Date('1985-06-21')),
    new Occasion(
      'https://images-na.ssl-images-amazon.com/images/I/61-HxZggJ7L._AC_SL1300_.jpg',
      'Elvyra',
      'Bendoraitiene',
      'weddings',
      new Date('2013-07-20'))
  ];

  constructor() {
  }

  getOccasions(): Occasion[] {
    return this.occations.slice();
  }
}
