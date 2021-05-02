import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { MenuTabs } from './enums/tab.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'luxoft-test';

  constructor(private router: Router) { }

  tabClick(event: MatTabChangeEvent): Promise<boolean> {
    let uri = null;
    switch(event.index) {
      case MenuTabs.ALBUMS:
        uri = '/albums';
        break;
      case MenuTabs.BOOKS:
        uri = '/books';
        break;
      default:
        uri = '/';
        break;
    }
    return this.router.navigateByUrl(uri);
  }
}
