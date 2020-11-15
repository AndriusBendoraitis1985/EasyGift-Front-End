import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';
import {Gift} from '../../models/gift.model';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {
  @Input()
  occasion: Occasion;

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
  }

  onAddLike(gift: Gift, occasion: Occasion): void {
    gift.rating++;
    this.occasionService.addLike(gift.giftId, occasion).subscribe();
    console.log('giftId: ' + gift.giftId + ' occasionId: ' + occasion.occasionId);
  }
}
