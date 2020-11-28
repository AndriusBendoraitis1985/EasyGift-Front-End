import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Gift} from '../../models/gift.model';
import {GiftService} from '../../services/gift.service';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';

@Component({
  selector: 'app-edit-gift-form',
  templateUrl: './edit-gift-form.component.html',
  styleUrls: ['./edit-gift-form.component.css']
})
export class EditGiftFormComponent implements OnInit {
  giftToUpdate: Gift;
  occasion: Occasion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private giftService: GiftService,
    private occasionService: OccasionService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.occasionService.getOccasionById(+params.id).subscribe(
          (occasionData: Occasion) => {
            this.occasion = occasionData;
          });
        this.giftService.getGiftById(+params.giftId).subscribe(
          (giftData: Gift) => {
            this.giftToUpdate = giftData;
          });
      }
    );
  }

  onSubmit(): void {
    this.giftToUpdate.rating = 0;
    this.giftService.updateGift(this.giftToUpdate).subscribe(
      result => this.router.navigate(['events/' + this.occasion.occasionId]).then(r => location.reload()));
    alert('Gift data changed! \nRating was set to 0!');
  }

  onCancel(): void {
    this.router.navigate(['../events/' + this.occasion.occasionId]);
  }
}
