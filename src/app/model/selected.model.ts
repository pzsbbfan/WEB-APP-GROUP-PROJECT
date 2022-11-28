import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { SurveyListComponent } from "../pages/list/survey-list.component";
import { from, Observable } from "rxjs";

@Injectable()
export class selectedSurvey{
    public surveys:Survey[] = [];

    addSurvey(survey:Survey):void{
        const line = this.surveys.find(l=>l.title ===survey.title);
        if (line !== undefined)
        {}
        else{
            this.surveys.push(new Survey(line.title,line.type,
                line.startdate,line.enddate,line.username,line.question));
        }
    }
}