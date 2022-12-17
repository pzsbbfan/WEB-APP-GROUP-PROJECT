import { Injectable } from "@angular/core";


@Injectable()
export class selectedSurvey{
    public _id: number;
    public title: string ="";
    public type: string=""; 
    public startdate: string="";
    public enddate: string="";
    public username: string="";
    public question: Array<string>=[];
    constructor(){
    }
    
}

