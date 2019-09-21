import { Component, OnInit } from '@angular/core';
import { Quote} from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1,'Be so good they can’t ignore you.','Don`t be too good to anybody',new Date(2020,3,14)),
    new Quote(2,'The only joy in the world is to begin','Joy,the greatest thing ever',new Date(2019,6,9)),
    new Quote(3,'Happiness depends upon ourselves.','Always be happy',new Date(2022,1,12)),
    new Quote(4,'Happiness is a state of activity.','You should exercise happiness',new Date(2019,0,18))
  
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  

  constructor() { }

  ngOnInit() {
  }

}
