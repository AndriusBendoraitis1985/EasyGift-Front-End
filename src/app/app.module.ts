import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {OccasionComponent} from './occasion/occasion.component';
import {OccasionListComponent} from './occasion/occasion-list/occasion-list.component';
import {OccasionDetailComponent} from './occasion/occasion-detail/occasion-detail.component';
import {HistoryComponent} from './history/history.component';
import {HistoryEditComponent} from './history/history-edit/history-edit.component';
import {HistoryListComponent} from './history/history-list/history-list.component';
import {OccasionItemComponent} from './occasion/occasion-list/occation-item/occasion-item.component';
import {HistoryModalComponent} from './history/history-list/history-modal/history-modal.component';
import { TopGiftsComponent } from './top-gifts/top-gifts.component';
import {AppRoutingModule} from './app-routing.module';
import { NoOccationSelectedComponent } from './occasion/occasion-start/no-occation-selected.component';
import { AddGiftFormComponent } from './forms/add-gift-form/add-gift-form.component';
import { HomeComponent } from './home/home.component';
import { EditOccasionFormComponent } from './forms/edit-occasion-form/edit-occasion-form.component';
import { AddOccasionFormComponent } from './forms/add-occasion-form/add-occasion-form.component';
import { EditGiftFormComponent } from './forms/edit-gift-form/edit-gift-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OccasionComponent,
    OccasionListComponent,
    OccasionDetailComponent,
    HistoryComponent,
    HistoryEditComponent,
    HistoryListComponent,
    OccasionItemComponent,
    HistoryModalComponent,
    TopGiftsComponent,
    NoOccationSelectedComponent,
    AddGiftFormComponent,
    HomeComponent,
    EditOccasionFormComponent,
    AddOccasionFormComponent,
    EditGiftFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
