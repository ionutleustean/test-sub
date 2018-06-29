import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {C3Component} from "./c3/c3.component";
import {C4Component} from "./c4/c4.component";


const routes: Routes = [

  {
    path: '',
    redirectTo: 'app5',
    pathMatch: 'full'
  },
  {
    path: 'app6',
    children: [
      {
        path: '',
        redirectTo: 'c3',
        pathMatch: 'full'
      }, {
        path: 'c3',
        component: C3Component,
      }, {
        path: 'c4',
        component: C4Component,


      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
