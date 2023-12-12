import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  // Other routes
  { path: 'feedback', component: FeedbackComponent },
  // Other routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }