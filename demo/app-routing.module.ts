import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCalendarTestComponent } from './first-calendar-test/first-calendar-test.component';
import { SecondCalendarTestComponent } from './second-calendar-test/second-calendar-test.component';


const routes: Routes = [
  {path: 'first', component: FirstCalendarTestComponent},
  {path: 'second', component: SecondCalendarTestComponent},
  {path: '', redirectTo: '/first', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
