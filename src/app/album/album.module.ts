import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { SearchModule } from '../components/search/search.module';


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    MatListModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
