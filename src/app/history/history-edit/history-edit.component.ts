import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryService} from '../history.service';
import {HistoryEntry} from '../history-list/history-entry.model';

@Component({
  selector: 'app-history-edit',
  templateUrl: './history-edit.component.html',
  styleUrls: ['./history-edit.component.css']
})
export class HistoryEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef;
  @ViewChild('surnameInput') surnameInputRef;
  @ViewChild('occasion') occasionInputRef;
  @ViewChild('date') dateInputRef;
  @ViewChild('description') descriptionInputRef;
  @ViewChild('picture') linkInputRef;

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
  }

  onAddNewEntry() {
    const name = this.nameInputRef.nativeElement.value;
    const surname = this.surnameInputRef.nativeElement.value;
    const occasion = this.occasionInputRef.nativeElement.value;
    const date = this.dateInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;
    const link = this.linkInputRef.nativeElement.value;
    const newHistoryEntry = new HistoryEntry(name, surname, occasion, new Date(date), description, link);
    this.historyService.addNewHistoryEntry(newHistoryEntry);
  }

}
