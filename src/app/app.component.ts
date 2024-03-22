import { Component } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quotes:Quote[]=[new Quote("Carpe Diem","Heorcu"),
                  new Quote("Ja sam najbolji","ivan")];
}
