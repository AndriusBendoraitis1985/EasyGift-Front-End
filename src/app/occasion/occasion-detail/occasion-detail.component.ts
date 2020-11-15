import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';
import {Gift} from '../../models/gift.model';
import {GiftService} from '../../services/gift.service';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {
  @Input()
  occasion: Occasion;

  constructor(private giftService: GiftService) {
  }

  ngOnInit(): void {
  }

  onAddLike(gift: Gift): void {
    this.giftService.addLike(gift).subscribe();
  }
}
