import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../../models/occasion.model';
import {OccasionService} from '../../../services/occasion.service';
import {DashboardService} from '../../../services/dashboard.service';

@Component({
  selector: 'app-user-occasion-list',
  templateUrl: './user-occasion-list.component.html',
  styleUrls: ['./user-occasion-list.component.css']
})
export class UserOccasionListComponent implements OnInit {
  userOccasions: Occasion[];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.getOccasionsOfAuthorisedUser().subscribe(
      (data: Occasion[]) => {
        this.userOccasions = data;
      });
  }

}
