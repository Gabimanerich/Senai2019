import {Post} from '../decorators';
import {Get} from '../decorators';
import {Action} from '../kernel/action';
import {ActionType} from '../kernel/route-types';
import {VPUtils} from '../utils/vputils';
import {KernelUtils} from '../kernel/kernel-utils';
import {MySQL} from '../mysql/mysql';
import {MySQLFactory} from '../mysql/mysql_factory';

export class CadastroAction extends Action{

    private validateData(){
        new KernelUtils().createExceptionApiError('1001', 'Dados inválidos', this.req.body.tamanho == '' || this.req.body.sabor == '');
    }

    private generateSQL() : string {
        return 'INSERT INTO sabor(tamanho, sabor, preco) VALUES ( \'' + this.req.body.tamanho + '\' and sabor \'' + this.req.body.sabor + '\' ' + this.req.body.preco + '\' )';
    }

    private generateSQLGetTamanhos() : string {
        return 'select * from tamanho';
    }

    @Post('/cadastro')
    public Post(){
        this.validateData();

        new MySQLFactory().getConnection().select(this.generateSQL()).subscribe(
            (data : any) => {
                if (!data.length || data.length != 1){
                  this.sendError(new KernelUtils().createErrorApiObject(401, '1001', 'Dados invalidos'));
                  return;
                }
                
                this.sendAnswer({
                    token    : new VPUtils().generateGUID().toUpperCase(),
                    tamanho : this.req.body.tamanho,
                    sabor : this.req.body.sabor,
                    preco : this.req.body.preco
                });
            },
            (error : any) => {
                console.log(error);
                this.sendError(error);
            }
        );
    }

    @Get('/tamanhoConsulta')
    public GetTamanho(){
        new MySQLFactory().getConnection().select(this.generateSQLGetTamanhos()).subscribe(
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