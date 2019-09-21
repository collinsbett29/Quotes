import { Component, OnInit } from '@angular/core';
import { Quote} from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1,'Be so good they can’t ignore you.','Don`t be too good to anybody'),
    new Quote(2,'The only joy in the world is to begin','Joy,the greatest thing ever'),
    new Quote(3,'Happiness depends upon ourselves.','Always be happy'),
    new Quote(4,'Happiness is a state of activity.','You should exercise happiness ')
  
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
