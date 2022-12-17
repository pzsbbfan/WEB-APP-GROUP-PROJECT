import{NgModule} from '@angular/core';
import { SurveyRepository } from './survey.repository';
import { SurveyListComponent } from '../pages/list/survey-list.component';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
    imports: [HttpClientModule],
    providers:[SurveyRepository,RestDataSource,SurveyListComponent,AuthService,JwtHelperService]
})
export class ModelModule{}