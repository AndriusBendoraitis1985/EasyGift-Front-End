import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
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

const appRoutes: Routes = [
  {path: '', component: OccasionComponent},
  {path: 'events', component: OccasionComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'gifts', component: TopGiftsComponent}
];


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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
