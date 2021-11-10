import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './component';
import { AppRoutingModule } from './app-routing.module';

import { FirstCalendarTestComponent } from './first-calendar-test/first-calendar-test.component';
import { SecondCalendarTestComponent } from './second-calendar-test/second-calendar-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    AppRoutingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [DemoComponent,
    FirstCalendarTestComponent,
    SecondCalendarTestComponent,],
  exports: [DemoComponent],
})
export class DemoModule {}
