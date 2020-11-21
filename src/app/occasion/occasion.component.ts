import {Component, OnInit} from '@angular/core';
import {Occasion} from '../models/occasion.model';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.css']
})
export class OccasionComponent implements OnInit {
  selectedOccasion: Occasion;

  constructor() {
  }

  ngOnInit(): void {
  }

}
