import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './admin/login/login.component';
import { AdminComponent } from  './admin/admin.component';
import { AppComponent } from './app.component';
const routes: Routes = [{
  path: '',
  component:  AppComponent,
  
  children: [
      // [...]
      { path: '', component: AppComponent, pathMatch: 'full'},
      { path:  'admin', component:  AdminComponent},
     { path:  'admin/login', component:  LoginComponent},
     ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
