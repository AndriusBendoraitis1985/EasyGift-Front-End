import { Component, OnInit } from '@angular/core';
import {Gift} from '../models/gift.model';
import {GiftService} from '../services/gift.service';

@Component({
  selector: 'app-top-gifts',
  templateUrl: './top-gifts.component.html',
  styleUrls: ['./top-gifts.component.css']
})
export class TopGiftsComponent implements OnInit {
  gifts: Gift[];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.giftService.getAllGifts().subscribe(
      data => {
        this.gifts = data;
      });
  }

}
