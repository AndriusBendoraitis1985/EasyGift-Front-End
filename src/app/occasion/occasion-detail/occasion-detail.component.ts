import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../occasion-list/occasion.model';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {
  @Input()
  occasion: Occasion;
  displayMenu = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
