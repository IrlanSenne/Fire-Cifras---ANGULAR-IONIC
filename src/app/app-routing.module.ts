import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CifraCorinhosComponent } from './cifra-corinhos/cifra-corinhos.component';

const routes: Routes = [

{path: '', loadChildren: () => import('./intro/intro.module').then(m => m.IntroPageModule)},
{path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
{path: 'cifra/:banda/:id', component: CifraCorinhosComponent},

];
@NgModule({
  declarations: [ CifraCorinhosComponent],
  imports: [CommonModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
 
})
export class AppRoutingModule {}
