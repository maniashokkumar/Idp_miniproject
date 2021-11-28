import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloglistsRoutingModule } from './bloglists-routing.module';
import { BloglistsComponent } from './bloglists.component';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    BloglistsComponent
  ],
  imports: [
    CommonModule,
    BloglistsRoutingModule,
    CardsModule

  ]
})
export class BloglistsModule { }
