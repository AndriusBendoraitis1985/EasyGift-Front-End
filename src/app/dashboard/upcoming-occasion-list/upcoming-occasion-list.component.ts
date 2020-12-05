import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';

@Component({
  selector: 'app-upcoming-occasion-list',
  templateUrl: './upcoming-occasion-list.component.html',
  styleUrls: ['./upcoming-occasion-list.component.css']
})
export class UpcomingOccasionListComponent implements OnInit {
  occasions: Occasion[];

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
    this.occasionService.getAllOccasions().subscribe(
      (data: Occasion[]) => {
        this.occasions = data;
      });
  }
}
