import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesListComponent } from './components/cases-list/cases-list.component'
import { CasesDetailsComponent } from './components/cases-details/cases-details.component'
import { CasesNewComponent } from './components/cases-new/cases-new.component'


const appRoutes: Routes = [
    {path: 'listview', component:CasesListComponent},
    {path: 'details/:id', component:CasesDetailsComponent},
    {path:'addnewcase', component:CasesNewComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}