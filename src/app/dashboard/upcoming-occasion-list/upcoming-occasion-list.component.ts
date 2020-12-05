import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-upcoming-occasion-list',
  templateUrl: './upcoming-occasion-list.component.html',
  styleUrls: ['./upcoming-occasion-list.component.css']
})
export class UpcomingOccasionListComponent implements OnInit {
  upcomingOccasions: Occasion[];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.getAllOccasionsForMonthPeriod().subscribe(
      (data: Occasion[]) => {
        this.upcomingOccasions = data;
      });
  }
}
