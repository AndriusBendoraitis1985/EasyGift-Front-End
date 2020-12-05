import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  selectedFeature = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onselect(feature: string): void {
    this.selectedFeature.emit(feature);
  }
}
