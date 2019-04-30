import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http';


@Injectable()
export class cadastrar {

    constructor(public http : HttpProvider ){}

    public cadastrando (pSabor : string, pValor: string, pTamanho: number,){
        let json = {
            sabor : pSabor,
            preco : pValor,
            tamanho : pTamanho
        }

        this.http.url = 'http://localhost:3000/cadastro';
        return this.http.post(json)

    }

    public getTamanho(){
      this.http.url = 'http://localhost:3000/tamanhoConsulta';
      return this.http.get()
  }

}
