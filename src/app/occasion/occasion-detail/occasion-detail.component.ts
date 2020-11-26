import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';
import {Gift} from '../../models/gift.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {
  occasion: Occasion;
  id: number;

  constructor(
    private occasionService: OccasionService,
    private route: ActivatedRoute,
    private router: Router,
    private historyService: HistoryService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        console.log(params);
        this.occasionService.getOccasionById(this.id).subscribe(
          (occasion: Occasion) => {
            this.occasion = occasion;
            console.log(occasion);
          }
        );
      }
    );
  }

  onAddLike(gift: Gift, occasion: Occasion): void {
    gift.rating++;
    this.occasionService.addLike(gift.giftId, occasion).subscribe();
    console.log('giftId: ' + gift.giftId + ' occasionId: ' + occasion.occasionId);
  }

  onDelete(): void {
    this.occasionService.deleteOccasionById(this.occasion.occasionId).subscribe(result => {
      this.router.navigate(['../events']).then(r => location.reload());
    });
    alert('event deleted successfully!');
  }

  onConfirm(gift: Gift, occasion: Occasion): void {
    this.historyService.confirmAndBuy(gift, occasion);
  }

}
