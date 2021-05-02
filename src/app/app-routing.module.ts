import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'albums',
    loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: '**',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
