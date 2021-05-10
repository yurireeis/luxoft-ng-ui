import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Keys } from 'src/app/enums/keyboard.enum';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder = "";
  @Input() label = "";
  @Output() searchEvent = new EventEmitter<string>();

  keyPressed(
    event: KeyboardEvent,
    text: string
  ) {
    switch(event.key) {
      case Keys.ENTER:
        return this.searchEvent.emit(text);
      default:
        return;
    }
  }
}
