import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './misc/about/about.component';
import { HomeComponent } from './misc/home/home.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "users/list", component: UserListComponent},
  { path: "users/details/:id", component: UserDetailComponent},
  { path: "users/edit/:id", component: UserEditComponent},
  { path: "users/create", component: UserCreateComponent},
  { path: "users/login", component: UserLoginComponent},
  

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
