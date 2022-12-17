import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Survey } from "./survey.model";
import {JwtHelperService} from '@auth0/angular-jwt';
import { selectedSurvey } from "./selected.model";
import { submitSurvey } from "./submittedSurvey.model";
import { User } from "./user.model";

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource
{
    user:User;
    baseUrl : string;
    authToken : string;

    private httpOptions = 
{
    headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Origin,X-Requested-With, Content-Type, Accept'
    })
};
    constructor(private http : HttpClient,
        private jwtService: JwtHelperService){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getSurvey(): Observable<Survey[]>
    {
        return this.http.get<Survey[]>(this.baseUrl + 'survey');
    }

    getSubmitSurvey():Observable<submitSurvey[]>
    {
        return this.http.get<submitSurvey[]>(this.baseUrl+'survey/submitted');
    }

    saveSubmittedSurvey(submitSurvey:submitSurvey):Observable<submitSurvey>
    {
        console.log(JSON.stringify(submitSurvey));
        return this.http.post<submitSurvey>(this.baseUrl+'survey/submitted', submitSurvey);
    }

    saveSurvey(survey:selectedSurvey):Observable<Survey>
    {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(this.baseUrl+'survey',survey);
    }

    saveSurvey1(survey:Survey):Observable<Survey>
    {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(this.baseUrl+'survey',survey);
    }

    deleteSurvey(id:number):Observable<Survey>
    {
        console.log(id);
        this.loadToken();
        return this.http.get<Survey>(`${this.baseUrl}survey/delete/${id}`,this.httpOptions)
    }

    updateSurvey(survey : Survey):Observable<Survey>
    {
        this.loadToken();
        return this.http.post<Survey>(`${this.baseUrl}survey/edit/${survey.title}`, survey, this.httpOptions);
    }

    authenticate(user:User):Observable<any>
    {
        return this.http.post<any>(this.baseUrl + 'login',user,this.httpOptions);
    }

    storeUserData(token:any, user:User):void
    {
        localStorage.setItem('id_token','Bearer '+token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    loggedIn():boolean
    {
        return !this.jwtService.isTokenExpired(this.authToken);
    }

    logout():Observable<any>
    {
        this.authToken = null;
        this.user = null;
        localStorage.clear();

        return this.http.get<any>(this.baseUrl +'logout', this.httpOptions);
    }

    private loadToken():void
    {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization',this.authToken);
    }
   
}