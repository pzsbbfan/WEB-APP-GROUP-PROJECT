import{NgModule} from '@angular/core';
import { SurveyRepository } from './survey.repository';
import { StaticDataSource } from './static.datasource';
import { SurveyListComponent } from '../pages/list/survey-list.component';

@NgModule({
    providers:[SurveyRepository,StaticDataSource,SurveyListComponent]
})
export class ModelModule{}