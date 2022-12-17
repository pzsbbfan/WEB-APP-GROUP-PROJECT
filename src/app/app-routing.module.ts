import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelModule } from './model/model.module';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyListComponent } from './pages/list/survey-list.component';
import { CreateComponent } from './pages/create/create.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './pages/login/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { submitSurvey } from './model/submittedSurvey.model';
import { SurveyTableComponent } from './pages/admin/submitted-survey-table/submitted-survey-table.component';
import { SurveyEditComponent } from './pages/admin/survey-edit/survey-edit.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path: 'home',component:HomepageComponent},
  {path:'about',component:AboutComponent},
  {path:'project',component:InfoComponent},
  {path:'survey', component:SurveyListComponent},
  {path:'login', component:LoginComponent},
  {path:'survey-detail',component:SurveyComponent},
  {path:'survey/add',component:CreateComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
  {path:'survey/table',component:SurveyTableComponent,canActivate:[AuthGuard]},
  {path:'survey/edit/:title',component:SurveyEditComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ModelModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
