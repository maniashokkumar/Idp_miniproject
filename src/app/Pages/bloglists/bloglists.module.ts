import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloglistsRoutingModule } from './bloglists-routing.module';
import { BloglistsComponent } from './bloglists.component';


@NgModule({
  declarations: [
    BloglistsComponent
  ],
  imports: [
    CommonModule,
    BloglistsRoutingModule
  ]
})
export class BloglistsModule { }
