import {Component, OnInit} from '@angular/core';
import {Occasion} from '../../models/occasion.model';

@Component({
  selector: 'app-add-occasion-form',
  templateUrl: './add-occasion-form.component.html',
  styleUrls: ['./add-occasion-form.component.css']
})
export class AddOccasionFormComponent implements OnInit {
  occasion: { occasionType: string; userName: string; occasionDate: Date; userSurname: string; gifts: any[] } = {
    occasionDate: new Date(''),
    occasionType: '',
    userSurname: '',
    userName: '',
    gifts: []
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
