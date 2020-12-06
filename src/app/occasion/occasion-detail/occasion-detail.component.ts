import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';
import {Gift} from '../../models/gift.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HistoryService} from '../../services/history.service';
import {GiftService} from '../../services/gift.service';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {
  occasion: Occasion;
  id: number;
  user: User;

  constructor(
    private occasionService: OccasionService,
    private giftService: GiftService,
    private route: ActivatedRoute,
    private router: Router,
    private historyService: HistoryService,
    private userService: UserService) {
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
    if (localStorage.getItem('userName')) {
      this.userService.getUserByUserName(localStorage.getItem('userName')).subscribe((data: User) => {
        this.user = data;
      });
    }
  }

  onAddLike(gift: Gift): void {
    gift.rating++;
    this.giftService.updateGift(gift).subscribe((result => this.ngOnInit()));
  }

  onDeleteOccasion(msg: string): void {
    this.occasionService.deleteOccasionById(this.occasion.occasionId).subscribe(result => {
      if (msg !== 'Single gift confirmed!') {
        this.router.navigate(['events']).then(r => location.reload());
      }
    });
    alert(msg);
  }

  onConfirmMulti(gift: Gift, occasion: Occasion): void {
    this.historyService.confirmAndBuy(gift, occasion, this.user);
    this.giftService.deleteGiftById(gift.giftId).subscribe();
    alert('Multi gift confirmed!');
  }

  onConfirmSingle(gift: Gift, occasion: Occasion): void {
    this.historyService.confirmAndBuy(gift, occasion, this.user);
    this.onDeleteOccasion('Single gift confirmed!');
  }

  onDeleteGift(giftId: number): void {
    this.giftService.deleteGiftById(giftId).subscribe((result => this.ngOnInit()));
    alert('Gift deleted successfully!');
  }
}
