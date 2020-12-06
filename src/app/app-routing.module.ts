import { AdminAuthGuard } from './admin-auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UserAuthGuard } from './user-auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },{
    path:'sign-up',
    component:RegisterComponent
  },{
    path:'quiz',
    component:QuizComponent,
    canActivate:[UserAuthGuard]
  },{
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminAuthGuard]
  },{
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
