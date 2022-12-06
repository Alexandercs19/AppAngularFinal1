import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuieroPageRoutingModule } from './quiero-routing.module';

import { QuieroPage } from './quiero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuieroPageRoutingModule
  ],
  declarations: [QuieroPage]
})
export class QuieroPageModule {}
