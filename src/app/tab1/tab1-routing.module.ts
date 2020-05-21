import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  { path: '', component: Tab1Page, }
];

@NgModule({
  declarations:[ ],
  imports: [ PipesModule,RouterModule.forChild(routes)],
  exports: [PipesModule,RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageRoutingModule {}