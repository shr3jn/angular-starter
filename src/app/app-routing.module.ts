import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_helpers/auth.guard';
import {RegistrationComponent} from './registration/registration.component';
import {ListPostComponent} from './posts/list-post/list-post.component';
import {CreatePostComponent} from './posts/create-post/create-post.component';
import {ReadPostComponent} from './posts/read-post/read-post.component';
import {UpdatePostComponent} from './posts/update-post/update-post.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'posts/create', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'posts/update/:id', component: UpdatePostComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: ReadPostComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: ListPostComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
