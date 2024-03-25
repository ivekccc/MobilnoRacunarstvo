import { Quote } from "./quote.model";

export class QuoteService{
    quotes:Quote[]=[new Quote("q1","Carpe Diem","Heorcu"),
    new Quote("q2","Ja sam najbolji","ivan")];
    addQuote(quote:Quote):void{
        this.quotes.push(quote);
      }
}