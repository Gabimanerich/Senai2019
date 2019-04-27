import { Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import {MySQL} from '../mysql/mysql';
import {MySQLFactory} from '../mysql/mysql_factory';

export class SaboresAction extends Action {
    private generateSQL() : string {
        return 'select * from sabores where sabores.idsabores';
    }

    @Get('/sabores/:tamanho')
    public Get(){

        let tamanho = this.req.params.tamanho;

        new MySQLFactory().getConnection().select(this.generateSQL()).subscribe(
            (data : any) => {
                this.sendAnswer(data);
            },
            (error : any) => {
                this.sendError(error);
            }
        );
        
    }

    private createPizzaObject(sabores : string, price : number){
        return {
            sabor : sabores,
            preco : price
        };
    }

    defineVisibility() {
        this.actionEscope = ActionType.atPublic;
    }
}