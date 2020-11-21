import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OccasionComponent} from './occasion/occasion.component';
import {HistoryComponent} from './history/history.component';
import {TopGiftsComponent} from './top-gifts/top-gifts.component';
import {OccasionDetailComponent} from './occasion/occasion-detail/occasion-detail.component';
import {OccasionStartComponent} from './occasion/occasion-start/occasion-start.component';
import {AddGiftFormComponent} from './add-gift-form/add-gift-form.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: OccasionComponent, children: [
      {path: '', component: OccasionStartComponent},
      {path: ':id', component: OccasionDetailComponent},
      {path: ':id/new', component: AddGiftFormComponent},
    ]
  },
  {path: 'history', component: HistoryComponent},
  {path: 'gifts', component: TopGiftsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
