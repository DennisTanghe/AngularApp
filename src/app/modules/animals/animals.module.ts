import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals/animals.component';


@NgModule({
  declarations: [AnimalsComponent],
  imports: [
    CommonModule,
    GalleriaModule,
    AnimalsRoutingModule
  ]
})
export class AnimalsModule { }
