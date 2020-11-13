import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Occasion} from './occasion.model';
import {OccasionService} from '../occasion.service';

@Component({
  selector: 'app-occasion-list',
  templateUrl: './occasion-list.component.html',
  styleUrls: ['./occasion-list.component.css']
})
export class OccasionListComponent implements OnInit {
  userNameFilter = '';
  eventTypeFilter = '';

  occasions: Occasion[];

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
    this.occasions = this.occasionService.getOccasions();
  }



}
