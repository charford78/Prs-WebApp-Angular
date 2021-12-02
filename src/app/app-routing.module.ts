import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './misc/about/about.component';
import { HomeComponent } from './misc/home/home.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RequestlinesCreateComponent } from './requestlines/requestlines-create/requestlines-create.component';
import { RequestlinesEditComponent } from './requestlines/requestlines-edit/requestlines-edit.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestLinesComponent } from './requests/request-lines/request-lines.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestReviewComponent } from './requests/request-review/request-review.component';
import { RequestReviewslistComponent } from './requests/request-reviewslist/request-reviewslist.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: "", redirectTo: "users/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "users/list", component: UserListComponent},
  { path: "users/details/:id", component: UserDetailComponent},
  { path: "users/edit/:id", component: UserEditComponent},
  { path: "users/create", component: UserCreateComponent},
  { path: "users/login", component: UserLoginComponent},
  { path: "vendors/list", component: VendorListComponent},
  { path: "vendors/details/:id", component: VendorDetailComponent},
  { path: "vendors/create", component: VendorCreateComponent},
  { path: "vendors/edit/:id", component: VendorEditComponent},
  { path: "products/list", component: ProductListComponent},
  { path: "products/details/:id", component: ProductDetailComponent},
  { path: "products/create", component: ProductCreateComponent},
  { path: "products/edit/:id", component: ProductEditComponent},
  { path: "requests/list", component: RequestListComponent},
  { path: "requests/details/:id", component: RequestDetailComponent},
  { path: "requests/create", component: RequestCreateComponent},
  { path: "requests/edit/:id", component: RequestEditComponent},
  { path: "requests/lines/:id", component: RequestLinesComponent},
  { path: "requests/reviews", component: RequestReviewslistComponent},
  { path: "requests/review/:id", component: RequestReviewComponent},
  { path: "requestlines/create/:id", component: RequestlinesCreateComponent},
  { path: "requestlines/edit/:id", component: RequestlinesEditComponent},
  

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
