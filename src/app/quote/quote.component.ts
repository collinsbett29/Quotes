import { Component, OnInit } from '@angular/core';
import { Quote} from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1,'Be so good they can’t ignore you.','Don`t be too good to anybody','William Shakespeare','Collins',new Date(2020,3,14),"","",0,0),
    new Quote(2,'The only joy in the world is to begin','Joy,the greatest thing ever','Arthur Conan Doyle','Kevin',new Date(2019,6,9),"","",0,0),
    new Quote(3,'Happiness depends upon ourselves.','Always be happy',' Leo Tolstoy','Emmanuel',new Date(2022,1,12),"","",0,0),
    new Quote(4,'Happiness is a state of activity.','You should exercise happiness','Edgar Allan Poe','Deborah',new Date(2019,0,18),"","",0,0)
  
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  upvote(index){
    this.quotes[index].upvotes++;
  }
  downvote(index){
    this.quotes[index].downvotes++;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
