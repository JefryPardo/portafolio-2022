import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllComponent } from './Components/all/all.component';

const routes: Routes = [
  {path: 'all', component: AllComponent},
  { path: '', pathMatch: 'full', redirectTo: 'all'},
  // {path: 'allSkills', component: AllSkillsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'all'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
