import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class AuthService
{
    user:User;

    constructor(private dataSource:RestDataSource)
    {
        this.user = new User();
    }

    authenticate(user:User):Observable<any>
    {
        console.log(user);
        return this.dataSource.authenticate(user);
    }

    storeUserData(token: any, user:User):void
    {
        return this.dataSource.storeUserData(token,user);
    }

    get authenticated():boolean
    {
        return this.dataSource.loggedIn();
    }

    logout():Observable<any>
    {
        return this.dataSource.logout();
    }
}