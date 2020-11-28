import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {OccasionService} from '../../services/occasion.service';

@Component({
  selector: 'app-edit-occasion-form',
  templateUrl: './edit-occasion-form.component.html',
  styleUrls: ['./edit-occasion-form.component.css']
})
export class EditOccasionFormComponent implements OnInit {
  occasion: Occasion;

  constructor(private route: ActivatedRoute, private occasionService: OccasionService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params.id);
        this.occasionService.getOccasionById(+params.id).subscribe(
          (data: Occasion) => {
            this.occasion = data;
          }
        );
      }
    );
  }

  onSubmit(): void {
    this.occasionService.updateOccasion(this.occasion)
      .subscribe(result => this.router.navigate(['../events/' + this.occasion.occasionId]).then(r => location.reload()));
  }

  onCancel(): void {
    this.router.navigate(['../events/' + this.occasion.occasionId]);
  }
}
