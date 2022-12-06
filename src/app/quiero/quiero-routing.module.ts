import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuieroPage } from './quiero.page';

const routes: Routes = [
  {
    path: '',
    component: QuieroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuieroPageRoutingModule {}
