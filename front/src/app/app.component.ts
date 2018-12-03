import { Component, OnInit } from '@angular/core';
import { HttpCasesService } from '../services/http-cases.service';
import { trigger, state, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('translate', [
     state('show', style({width:'20vw'})),
     state('hide', style({width:'0vw'})),
     transition('hide <=> show', [animate('300ms ease')])
    ])
  ]
})

export class AppComponent implements OnInit{
  
  title = 'front';
  
  show = false
  
  message = {
    search:'BUSCAR EN INTERNET',
    submenu_stade:this.state_value()
  };

  constructor(private http:HttpCasesService){}

  ngOnInit(){}

  state_value(){
    return 'GENERAL VIEW'
  }

  get stateName(){
    return this.show ? 'show' : 'hide'
  }

  toggle(){
    this.show = !this.show;
  }

}
