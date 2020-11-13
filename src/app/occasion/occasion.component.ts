import {Component, OnInit} from '@angular/core';
import {Occasion} from './occasion-list/occasion.model';
import {OccasionService} from './occasion.service';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.css']
})
export class OccasionComponent implements OnInit {
  selectedOccasion: Occasion;

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
    this.occasionService.occasionSelection.subscribe(
      (occasion: Occasion) => {
        this.selectedOccasion = occasion;
      }
    );
  }

}
