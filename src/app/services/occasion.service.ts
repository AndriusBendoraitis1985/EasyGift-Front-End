import {Injectable, EventEmitter} from '@angular/core';
import {Occasion} from '../models/occasion.model';
import {Gift} from '../shared/gift.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {
  occasionSelection = new EventEmitter<Occasion>();
  private occasionsUrl: string;

  constructor(private http: HttpClient) {
    this.occasionsUrl = 'http://localhost:8080/events';
  }

  public findAll(): Observable<Occasion[]> {
    return this.http.get<Occasion[]>(this.occasionsUrl);
  }

  // private occasions: Occasion[] = [
  //   new Occasion(
  //     'Andrius',
  //     'Bendoraitis',
  //     'birthday',
  //     new Date('1985-06-21'),
  //     [
  //       new Gift(
  //         'Motorcycling gloves',
  //         'https://dainese-cdn.thron.com/delivery/public/image/dainese/03183936-2923-46e0-9744-6ddf6151a43a/ramfdh/std/615x615/steel-pro-gloves.jpg',
  //         0),
  //       new Gift(
  //         'Hand watch',
  //         'https://images-na.ssl-images-amazon.com/images/I/51nufe1j92L._AC_UX679_.jpg',
  //         0
  //       )
  //     ]),
  //   new Occasion(
  //     'Elvyra',
  //     'Bendoraitiene',
  //     'weddings',
  //     new Date('2013-07-20'),
  //     [
  //       new Gift(
  //         'Weekend in Paris',
  //         'https://europe.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/53081031_s.jpg?itok=eHxRiJQK',
  //         0),
  //       new Gift(
  //         'Visit in theatre',
  //         'https://www.teatras.lt/uploads/img/catalog/13/image_13_79645224.jpg',
  //         0)
  //     ]
  //   )
  // ];


  // getOccasions(): Occasion[] {
  //   return this.occasions.slice();
  // }
}
