import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service'
import { Case } from 'src/app/models/case'
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.css']
})

export class CasesListComponent implements OnInit {
  case$: Observable<Case[]>;
  private selectedId:string

  res:Array<object> = [];

  urls = {
    GETLIST:'http://192.168.0.106:3000/api/cases'
  }

  constructor(private http:HttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCasesList()
  }

  getCasesList(){
    this.http.getData(this.urls.GETLIST)
      .subscribe((val:Array<object>)=>{
        this.res = val;
        console.log(this.res)
      })
  }  
}
