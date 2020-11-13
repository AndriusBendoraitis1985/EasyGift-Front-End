import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../occasion.model';
import {OccasionService} from '../../occasion.service';

@Component({
  selector: 'app-occasion-item',
  templateUrl: './occasion-item.component.html',
  styleUrls: ['./occasion-item.component.css']
})
export class OccasionItemComponent implements OnInit {
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
