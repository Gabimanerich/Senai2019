import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import {MySQL} from '../mysql/mysql';
import {MySQLFactory} from '../mysql/mysql_factory';

export class TamanhosAction extends Action {

    private generateSQL() : string {
        return 'select * from tamanho where tamanho.idtamanho';
    }

    @Get('/tamanho')
    public GetTamanho(){
        new MySQLFactory().getConnection().select(this.generateSQL()).subscribe(
            (data : any) => {
                console.log(data);
                this.sendAnswer(data);
            },
            (error : any) => {
                this.sendError(error);
            }
        );

    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}