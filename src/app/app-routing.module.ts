import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SerieComponent } from './serie/serie.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'serie', component: SerieComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
