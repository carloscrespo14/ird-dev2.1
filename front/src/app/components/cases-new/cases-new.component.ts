import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-cases-new',
  templateUrl: './cases-new.component.html',
  styleUrls: ['./cases-new.component.css'],
})
export class CasesNewComponent implements OnInit {
  safeHtml: SafeHtml;

  trueShow = false;

  caseName: string;
  brand: string;
  keywords: string;
  desc: string;
  sd: string;
  fd: string;
  
  resp:  Array<object>;
  url = 'http://192.168.0.106:3000/api/cases/add'
  list = {}
  
  constructor(private http:HttpService, private sanitizer: DomSanitizer) { }
  

  ngOnInit() {
    
  }

  onSubmit() {
    let data = {
      caseName:this.caseName,
      sudject:this.brand,
      desc: this.desc,
      keywords:this.toArray(this.keywords),
      sd: this.sd,
      fd: this.fd,
    }

    this.addCase(data) 
  }

  toArray(data){
    let string = data
    let array = string.split(",")
    return array
  }

  resetForm(){
    this.caseName = ''
    this.brand = ''
    this.desc=''
    this.keywords=''
    this.sd=''
    this.fd=''
  }

  addCase(data){
    this.http.postData(this.url,data).subscribe((out:Array<object>)=>{
      this.resp = out
      this.myAlert(this.caseName)
      this.resetForm()
    })
  }

  myAlert(data:string){
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
      `<div class="alert alert-black alert-dismissible fade show"> <button type="button" class="close" data-dismiss="alert">&times;</button> <strong>Guardado!</strong> proceso de guardado exitoso ${data}. </div>`
    )
  }
}
