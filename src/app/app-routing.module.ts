import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'quotes',component:QuotesComponent},
  {path:'fun-facts',component:FunFactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
