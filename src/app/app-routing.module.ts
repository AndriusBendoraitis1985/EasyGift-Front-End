import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OccasionComponent} from './occasion/occasion.component';
import {HistoryComponent} from './history/history.component';
import {TopGiftsComponent} from './top-gifts/top-gifts.component';
import {OccasionDetailComponent} from './occasion/occasion-detail/occasion-detail.component';
import {NoOccationSelectedComponent} from './occasion/occasion-start/no-occation-selected.component';
import {AddGiftFormComponent} from './forms/add-gift-form/add-gift-form.component';
import {HomeComponent} from './home/home.component';
import {EditOccasionFormComponent} from './forms/edit-occasion-form/edit-occasion-form.component';
import {AddOccasionFormComponent} from './forms/add-occasion-form/add-occasion-form.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: OccasionComponent, children: [
      {path: '', component: NoOccationSelectedComponent},
      {path: 'new', component: AddOccasionFormComponent},
      {path: ':id', component: OccasionDetailComponent},
      {path: ':id/new', component: AddGiftFormComponent},
      {path: ':id/edit', component: EditOccasionFormComponent},
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
