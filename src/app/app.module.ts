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
import { FormsModule } from '@angular/forms';
import { SurveyListComponent } from './pages/list/survey-list.component';
import { CreateComponent } from './pages/create/create.component';


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
    CreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
