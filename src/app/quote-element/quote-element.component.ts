import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quote-element',
  templateUrl: './quote-element.component.html',
  styleUrl: './quote-element.component.css'
})
export class QuoteElementComponent implements OnInit{
@Input() text="Carpe Diem";
@Input() author='Horacie'
  constructor(){

  }
  ngOnInit(): void {

  }
}
