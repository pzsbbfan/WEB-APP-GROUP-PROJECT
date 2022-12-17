import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SurveyListComponent } from './pages/list/survey-list.component';
import { CreateComponent } from './pages/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { CommonModule } from '@angular/common';
import { AuthService } from './model/auth.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './pages/login/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { SurveyTableComponent } from './pages/admin/submitted-survey-table/submitted-survey-table.component';
import { SurveyEditComponent } from './pages/admin/survey-edit/survey-edit.component';

export function jwtTokenGetter():string
{
  return localStorage.getItem('id_token');
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    InfoComponent,
    LoginComponent,
    SurveyComponent,
    SurveyListComponent,
    CreateComponent,
    RegisterComponent,
    AdminComponent,
    SurveyTableComponent,
    SurveyEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:jwtTokenGetter
      }
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


