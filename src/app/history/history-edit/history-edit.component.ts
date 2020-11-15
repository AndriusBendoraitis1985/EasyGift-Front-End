import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryService} from '../../services/history.service';
import {HistoryEntry} from '../../models/history-entry.model';
import {ActivatedRoute, Router} from '@angular/router';

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

  selectedHistoryEntryToEdit: HistoryEntry;

  constructor(private historyService: HistoryService) {
    this.historyService.selectedHistoryEntry.subscribe(
      (historyEntry: HistoryEntry) => {
        this.selectedHistoryEntryToEdit = historyEntry;
      });
  }

  ngOnInit(): void {
  }

  onAddNewEntry(): void {
    const name = this.nameInputRef.nativeElement.value;
    const surname = this.surnameInputRef.nativeElement.value;
    const occasion = this.occasionInputRef.nativeElement.value;
    const date = this.dateInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;
    const link = this.linkInputRef.nativeElement.value;
    const newHistoryEntry = new HistoryEntry(name, surname, occasion, new Date(date), description, link);
    this.historyService.addNewHistoryEntry(newHistoryEntry).subscribe();
    alert('New event added to history: ' + name + ' ' + surname + ' ' + occasion);
    location.reload();
  }
}
