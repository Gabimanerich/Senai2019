import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CidadesPage } from './cidades';

@NgModule({
  declarations: [
    CidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(CidadesPage),
  ],
})
export class CidadesPageModule {}
