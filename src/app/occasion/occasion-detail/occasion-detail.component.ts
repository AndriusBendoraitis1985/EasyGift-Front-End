import {Component, Input, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {
  @Input()
  occasion: Occasion;

  constructor() {
  }

  ngOnInit(): void {
  }

}
