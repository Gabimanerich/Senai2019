import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {KernelUtils} from '../kernel/kernel-utils';
import {ActionType} from '../kernel/route-types';
import {MySQL} from '../mysql/mysql';
import {MySQLFactory} from '../mysql/mysql_factory';

export class BairrosAction extends Action {
    private generateSQL() : string {
        return 'select * from bairros.bairro from bairros'; + 'where bairros.idcidades'
    }

    @Get('/bairros/:idcidade')

    public getBairros(){
        let cidade = this.req.params.cidade;

        new KernelUtils().createExceptionApiError('1002', 'Cidade não informada', (cidade == null || cidade == undefined));

        new MySQLFactory().getConnection().select(this.generateSQL()).subscribe(
            (data : any) => {
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