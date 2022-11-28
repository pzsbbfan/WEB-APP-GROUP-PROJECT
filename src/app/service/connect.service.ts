import { Injectable } from '@angular/core';
import { Survey } from '../model/survey.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor() { }

  public selectedSurvey:Survey;
}
