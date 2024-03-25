import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'; // Correct import
import { Quote } from '../quote.model';
import { QuoteService } from '../quote.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'] // Correct property name
})
export class QuoteFormComponent implements OnInit{
  text = 'quote';
  author = 'author';
  fullQuote = 'full quote';

  @Output() addedQuote = new EventEmitter<Quote>();

  constructor(private quotesService:QuoteService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams:Params)=>{
      this.text=queryParams['text'];
      this.author=queryParams['author'];
    })
  }

  onAddQuote(): void {
    console.log('Quote added');
    const newQuote = new Quote("q3",this.text, this.author);
    //this.addedQuote.emit(newQuote);
    this.quotesService.addQuote(newQuote);
    this.fullQuote = `'${this.text}' - '${this.author}'`;
  }
  getTitle():string{
    return "Naslov";
  }
}
