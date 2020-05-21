import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Tab2Page } from './tab2.page';
import { CorinhosComponent } from '../corinhos/corinhos.component';
import { MusicasComponent } from '../musicas/musicas.component';
import { PipesModule } from '../pipes/pipes.module';
import { ModelCifraComponent } from '../model-cifra/model-cifra.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children:[
      { path: '', component: MusicasComponent },
      { path: 'banda/:teste', component: CorinhosComponent }
    ]   
  } 
];

@NgModule({
  declarations: [ ModelCifraComponent, CorinhosComponent, MusicasComponent],
  imports: [PipesModule, CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab2PageRoutingModule {}
