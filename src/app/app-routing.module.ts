import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyModule } from './model/model.module';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path: 'home',component:HomepageComponent},
  {path:'about',component:AboutComponent},
  {path:'project',component:InfoComponent},
  {path:'survey', component:SurveyListComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SurveyModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
