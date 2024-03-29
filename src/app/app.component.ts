import { Component } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[QuoteService]
})
export class AppComponent {
  /*quotes:Quote[]=[new Quote("Carpe Diem","Heorcu"),
                  new Quote("Ja sam najbolji","ivan")];*/

  quotes:Quote[];



  constructor(private quotesServise:QuoteService){
    this.quotes=this.quotesServise.quotes;
  }
 addQuote(quote:Quote):void{
   // this.quotes.push(quote);
  }
}
