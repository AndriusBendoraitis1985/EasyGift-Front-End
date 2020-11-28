import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OccasionService} from '../../services/occasion.service';
import {Occasion} from '../../models/occasion.model';

@Component({
  selector: 'app-add-gift-form',
  templateUrl: './add-gift-form.component.html',
  styleUrls: ['./add-gift-form.component.css']
})
export class AddGiftFormComponent implements OnInit {
  gift = {giftDescription: '', imaginePath: '', rating: 0};
  occasionId: number;
  occasion: Occasion;

  constructor(private router: Router, private occasionService: OccasionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.occasionId = this.route.snapshot.params.id;
    this.occasionService.getOccasionById(this.occasionId).subscribe((data: Occasion) => {
      this.occasion = data;
    });
  }

  onSubmit(): void {
    console.log(this.gift);
    this.occasionService.addNewGift(this.occasionId, this.gift).subscribe(
      result => this.router.navigate(['events/' + this.occasionId]).then(r => location.reload()));
    alert('New gift added');
  }

  onCancel(): void {
    this.router.navigate(['../events/' + this.occasionId]);
  }
}
