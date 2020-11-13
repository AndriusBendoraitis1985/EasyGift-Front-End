import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {UserListComponent} from './models/lists/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user-service/user.service';
import {UserGiftListComponent} from './models/lists/user-gift-list/user-gift-list.component';
import {FormsModule} from '@angular/forms';
import {OccasionComponent} from './occasion/occasion.component';
import {OccasionListComponent} from './occasion/occasion-list/occasion-list.component';
import {OccasionDetailComponent} from './occasion/occasion-detail/occasion-detail.component';
import {HistoryComponent} from './history/history.component';
import {HistoryEditComponent} from './history/history-edit/history-edit.component';
import {HistoryListComponent} from './history/history-list/history-list.component';
import {OccasionItemComponent} from './occasion/occasion-list/occation-item/occasion-item.component';
import {HistoryModalComponent} from './history/history-list/history-modal/history-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserGiftListComponent,
    OccasionComponent,
    OccasionListComponent,
    OccasionDetailComponent,
    HistoryComponent,
    HistoryEditComponent,
    HistoryListComponent,
    OccasionItemComponent,
    HistoryModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', component: UserListComponent},
      {path: 'usersgift', component: UserGiftListComponent},
    ]),
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
