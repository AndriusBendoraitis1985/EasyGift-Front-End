import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {OccasionService} from '../../services/occasion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-occasion-form',
  templateUrl: './add-occasion-form.component.html',
  styleUrls: ['./add-occasion-form.component.css']
})
export class AddOccasionFormComponent implements OnInit {
  occasion = new Occasion('', '', '', new Date(''), []);
  buttonType = '';
  lastOccasionId: number;

  constructor(private occasionService: OccasionService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.occasionService.createOccasion(this.occasion)
      .subscribe((data: Occasion) => {
        this.lastOccasionId = data.occasionId;
        this.router.navigate(['../events/' + this.lastOccasionId + '/newGift']).then(r => location.reload());
      });
  }

  onCancel(): void {
    this.router.navigate(['../events']);
  }
}
