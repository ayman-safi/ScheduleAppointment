import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';

import { CalendarWeekViewComponent } from './calendar-week-view/calendar-week-view.component';


@NgModule({
    declarations: [
        AppComponent,
        CalendarWeekViewComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        CalendarModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: CalendarWeekViewComponent },
        ])
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }