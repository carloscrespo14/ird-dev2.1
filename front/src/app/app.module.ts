import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CasesListComponent } from './components/cases-list/cases-list.component';
import { CasesDetailsComponent } from './components/cases-details/cases-details.component';

import { AppRoutingModule } from './app.routing.module'
import { HttpService } from 'src/app/services/http.service';
import { CasesNewComponent } from './components/cases-new/cases-new.component'

@NgModule({
  declarations: [
    AppComponent,
    CasesListComponent,
    CasesDetailsComponent,
    CasesNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
