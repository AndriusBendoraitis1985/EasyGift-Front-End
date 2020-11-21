import {Component, Input, OnInit} from '@angular/core';
import {Gift} from '../models/gift.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GiftService} from '../services/gift.service';
import {OccasionService} from '../services/occasion.service';
import {Occasion} from '../models/occasion.model';

@Component({
  selector: 'app-add-gift-form',
  templateUrl: './add-gift-form.component.html',
  styleUrls: ['./add-gift-form.component.css']
})
export class AddGiftFormComponent implements OnInit {
  gift = {giftDescription: '', imaginePath: '', rating: 0};
  occasionId: number;

  constructor(private router: Router, private occasionService: OccasionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.occasionId = this.route.snapshot.params.id;
  }

  onSubmit(): void {
    console.log(this.gift);
    this.occasionService.addNewGift(this.occasionId, this.gift).subscribe();
    this.router.navigate(['../']);

  }
}
