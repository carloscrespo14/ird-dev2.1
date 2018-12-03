import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service'
import { Observable } from 'rxjs';
import { Case } from '../../models/case';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css']
})
export class CasesDetailsComponent implements OnInit {

  case$: Observable<Case>;
  res:Array<object> = [];

  urls = {
    GETLIST:'http://192.168.0.106:3000/api/cases/'
  }
  public id: string;
  
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCasesList()
  }

  getCasesList(){
    this.http.getData(this.urls.GETLIST + this.id)
      .subscribe((val:Array<object>)=>{
        this.res = val;
        console.log(this.res)
      })
  }  

}
