import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmptyResultModule } from '../components/empty-result/empty-result.module';


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    AlbumRoutingModule,
    EmptyResultModule
  ]
})
export class AlbumModule { }
