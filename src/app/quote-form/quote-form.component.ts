import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'; // Correct import
import { Quote } from '../quote.model';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'] // Correct property name
})
export class QuoteFormComponent {
  text = '';
  author = '';
  fullQuote = 'full quote';

  @Output() addedQuote = new EventEmitter<Quote>();

  constructor(private quotesService:QuoteService){

  }

  onAddQuote(): void {
    console.log('Quote added');
    const newQuote = new Quote(this.text, this.author);
    //this.addedQuote.emit(newQuote);
    this.quotesService.addQuote(newQuote);
    this.fullQuote = `'${this.text}' - '${this.author}'`;
  }
  getTitle():string{
    return "Naslov";
  }
}
