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
import {EditGiftFormComponent} from './forms/edit-gift-form/edit-gift-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SecurityComponent} from './home/security/security.component';
import {SignInComponent} from './authentication/forms/sign-in/sign-in.component';
import {SignUpComponent} from './authentication/forms/sign-up/sign-up.component';
import {WelcomeComponent} from './home/welcome/welcome.component';
import {AuthGuard} from './authentication/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home/security/sign-in', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'security', component: SecurityComponent, children: [
          {path: '', redirectTo: '/home/security/sign-in', pathMatch: 'full'},
          {path: 'sign-in', component: SignInComponent},
          {path: 'sign-up', component: SignUpComponent}
        ]
      },
      {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
      {path: '', redirectTo: '/home/welcome', pathMatch: 'full'}
    ]
  },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {
    path: 'events', component: OccasionComponent, canActivateChild: [AuthGuard], children: [
      {path: '', component: NoOccationSelectedComponent},
      {path: 'new', component: AddOccasionFormComponent},
      {path: ':id', component: OccasionDetailComponent},
      {path: ':id/edit', component: EditOccasionFormComponent},
      {path: ':id/newGift', component: AddGiftFormComponent},
      {path: ':id/editGift/:giftId', component: EditGiftFormComponent},
    ]
  },
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
  {path: 'gifts', component: TopGiftsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
