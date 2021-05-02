

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from "@angular/router";
import { Injectable } from "@angular/core"
import { AccountService } from "../services/account.service";

@Injectable() //LoginGuard'ın olaiblmesi servis olabilmesi için  
               //injectiable içermesi gerek 
export class LoginGuard implements CanActivate{
    
    constructor(private accountService:AccountService,  private router:Router ){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{

       let logged = this.accountService.isLoggedIn();

        if(logged){
            return true;
        }
        this.router.navigate(["login"]); // login router yönlediriyor
        return false;
    }

}



