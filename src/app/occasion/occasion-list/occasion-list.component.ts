import {Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';

@Component({
  selector: 'app-occasion-list',
  templateUrl: './occasion-list.component.html',
  styleUrls: ['./occasion-list.component.css']
})
export class OccasionListComponent implements OnInit{
  userNameFilter = '';
  eventTypeFilter = '';
  occasions: Occasion[];
  showFilter = false;

  constructor(private occasionService: OccasionService) {
  }

  ngOnInit(): void {
    this.occasionService.getAllOccasions().subscribe(
      data => {
        this.occasions = data;
      });
    console.log('from occasion list component');
  }
}


