import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OccasionService} from '../../services/occasion.service';

@Component({
  selector: 'app-add-gift-form',
  templateUrl: './add-gift-form.component.html',
  styleUrls: ['./add-gift-form.component.css']
})
export class AddGiftFormComponent implements OnInit {
  gift = {giftDescription: '', imaginePath: '', rating: 0};
  // gift: Gift;
  occasionId: number;

  constructor(private router: Router, private occasionService: OccasionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.occasionId = this.route.snapshot.params.id;
  }

  onSubmit(): void {
    console.log(this.gift);
    this.occasionService.addNewGift(this.occasionId, this.gift).subscribe(result => this.router.navigate(['events/' + this.occasionId]));
    alert('New gift added');
  }
}
