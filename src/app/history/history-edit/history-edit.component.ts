import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryService} from '../../services/history.service';
import {HistoryEntry} from '../../models/history-entry.model';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

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
  user: User;

  constructor(private historyService: HistoryService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.historyService.selectedHistoryEntry.subscribe(
      (historyEntry: HistoryEntry) => {
        this.selectedHistoryEntryToEdit = historyEntry;
      });
    if (localStorage.getItem('userName')) {
      this.userService.getUserByUserName(localStorage.getItem('userName')).subscribe((data: User) => {
        this.user = data;
      });
    }
  }

  onAddNewEntry(): void {
    const name = this.nameInputRef.nativeElement.value;
    const surname = this.surnameInputRef.nativeElement.value;
    const occasion = this.occasionInputRef.nativeElement.value;
    const date = this.dateInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;
    const link = this.linkInputRef.nativeElement.value;
    const user = this.user;
    const newHistoryEntry = new HistoryEntry(name, surname, occasion, new Date(date), description, link, user);
    this.historyService.addNewHistoryEntry(newHistoryEntry).subscribe();
    alert('New event added to history: ' + name + ' ' + surname + ' ' + occasion);
    location.reload();
  }
}
