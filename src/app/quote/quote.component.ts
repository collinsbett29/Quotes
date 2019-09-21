import { Component, OnInit } from '@angular/core';
import { Quote} from'../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote []=[
    {id:1, name:'Be so good they can’t ignore you.', description:'Don`t be too good to anybody'},
    {id:2, name:'The only joy in the world is to begin', description:'Joy,the greatest thing ever'},
    {id:3, name:'Happiness depends upon ourselves.', description:'Always be happy'},
    {id:4, name:'Happiness is a state of activity.', description:'You should exercise happiness '}
  

  ];

  constructor() { }

  ngOnInit() {
  }

}
