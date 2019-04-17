import { PageprincipalPage } from './../pages/pageprincipal/pageprincipal';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';
import { NavController, Toast } from 'ionic-angular'

@Injectable()
export class Logon {

    constructor(public http : HttpProvider ){}

    public login (username : string, password : string){
        let json = {
            userName : username,
            password : password
        }

        this.http.url = 'http://localhost:3000/logon';
        return this.http.post(json)
    
    }
    
}
