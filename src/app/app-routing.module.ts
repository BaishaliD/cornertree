import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { HttpClientModule } from '@angular/common/http';

//import { HomeC } from './user/add-user/add-user.component';
//import { AllUsersComponent } from './user/all-users/all-users.component';

const appRoutes: Routes = [
  {path: '/home', component: HomeComponent},
  {path: '/job-posting', component: JobPostingComponent},
//   {path: 'logout', redirectTo: '/add-user', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ]
})
export class AppRoutingModule { }
