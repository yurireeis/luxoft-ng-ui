import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
