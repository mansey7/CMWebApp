import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './login/login.component';
import { AdminComponent } from  './admin.component';
const routes: Routes = [{
  path:  'admin',
  component:  AdminComponent,
  
  children: [
      // [...]
      { path:  'login',component:  LoginComponent},
      { path:  '', component:  AdminComponent},
      
     ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

