import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '', component: AccueilComponent },
  // {path: 'Résumé?', component: ResumeComponent? },
  // {path: 'Experiences Pro', component: ExpComponent?},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
