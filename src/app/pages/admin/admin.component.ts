import { Component } from "@angular/core";
import { Router} from "@angular/router";
import { AuthService } from "src/app/model/auth.service";






@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent
{
    constructor(private auth: AuthService,
        private router :Router){}
    
    
    logout():void
    {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
}