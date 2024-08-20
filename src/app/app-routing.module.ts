import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { NextPageComponent } from './next-page/next-page.component';

const routes: Routes = [
  { path: '', component: FormPageComponent },
  { path: 'next-page', component:NextPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
