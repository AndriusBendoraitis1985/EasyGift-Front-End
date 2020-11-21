import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../../../models/occasion.model';
import {OccasionService} from '../../../services/occasion.service';

@Component({
  selector: 'app-occasion-item',
  templateUrl: './occasion-item.component.html',
  styleUrls: ['./occasion-item.component.css']
})
export class OccasionItemComponent implements OnInit {
  @Input()
  occasion: Occasion;

  @Input()
  index: number;

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
  }
}
