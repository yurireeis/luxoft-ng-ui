import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { EmptyResultModule } from '../components/empty-result/empty-result.module';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    BookRoutingModule,
    EmptyResultModule
  ]
})
export class BookModule { }
