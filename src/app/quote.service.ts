import { Quote } from "./quote.model";

export class QuoteService{
    quotes:Quote[]=[new Quote("Carpe Diem","Heorcu"),
    new Quote("Ja sam najbolji","ivan")];
    addQuote(quote:Quote):void{
        this.quotes.push(quote);
      }
}