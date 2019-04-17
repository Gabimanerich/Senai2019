import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';


@Injectable()
export class cadastrar {

    constructor(public http : HttpProvider ){}

    public cadastrando (username : string, email: string, password : string){
        let json = {
            userName : username,
            email : email,
            password : password
        }

        this.http.url = 'http://localhost:3000/cadastro';
        return this.http.post(json)
    
    }
    
}