import { Component } from '@angular/core';
import { Quote } from '../quote.model';
import { QuoteService } from '../quote.service';
import { url } from 'inspector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

  quotes:Quote[];
  constructor(private quotesServise:QuoteService,private router:Router){
    this.quotes=this.quotesServise.quotes;
  }
  onAddQuote(){
    this.router.navigateByUrl('/quotes/new')
  }
  onEditQuote(quote:Quote){
    this.router.navigate(['quotes',quote.id,'edit'],{queryParams:{text:quote.text,author:quote.author}})
  }
}
