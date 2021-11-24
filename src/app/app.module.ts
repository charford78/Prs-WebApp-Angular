import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuComponent } from './misc/menu/menu.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorDeleteComponent } from './vendors/vendor-delete/vendor-delete.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestReviewsComponent } from './requests/request-reviews/request-reviews.component';
import { RequestReviewComponent } from './requests/request-review/request-review.component';
import { RequestReviewslistComponent } from './requests/request-reviewslist/request-reviewslist.component';
import { RequestlinesCreateComponent } from './requestlines/requestlines-create/requestlines-create.component';
import { RequestlinesEditComponent } from './requestlines/requestlines-edit/requestlines-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDeleteComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestReviewsComponent,
    RequestReviewComponent,
    RequestReviewslistComponent,
    RequestlinesCreateComponent,
    RequestlinesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
