import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../occasion.model';
import {OccasionService} from '../../occasion.service';

@Component({
  selector: 'app-occation-item',
  templateUrl: './occation-item.component.html',
  styleUrls: ['./occation-item.component.css']
})
export class OccationItemComponent implements OnInit {
  @Input()
  occasion: Occasion;

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
  }

  onSelect(occasion: Occasion) {
    this.occasionService.occasionSelection.emit(occasion);
  }

}
