import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './page/user-list/user-list.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { FoodEditComponent } from './page/food-edit/food-edit.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { BillListComponent } from './page/bill-list/bill-list.component';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { NutrientListComponent } from './page/nutrient-list/nutrient-list.component';
import { NutrientEditComponent } from './page/nutrient-edit/nutrient-edit.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { InformationComponent } from './page/information/information.component';
import { ContactComponent } from './page/contact/contact.component';
import { BestofComponent } from './page/bestof/bestof.component';
import { ProfilComponent } from './page/profil/profil.component';
import { AdminComponent } from './page/admin/admin.component';
import { NavAdminComponent } from './common/nav-admin/nav-admin.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { BestoffilterPipe } from './pipe/bestoffilter.pipe';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { CardComponent } from './common/card/card.component';
import { BooleanPipe } from './pipe/boolean.pipe';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { DietComponent } from './page/diet/diet.component';
import { MessageComponent } from './page/message/message.component';
import { RegistrationComponent } from './page/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    FoodListComponent,
    FoodEditComponent,
    OrderListComponent,
    OrderEditComponent,
    BillListComponent,
    BillEditComponent,
    NutrientListComponent,
    NutrientEditComponent,
    NavComponent,
    HomeComponent,
    InformationComponent,
    ContactComponent,
    BestofComponent,
    ProfilComponent,
    AdminComponent,
    NavAdminComponent,
    FilterPipe,
    SorterPipe,
    BestoffilterPipe,
    LoginComponent,
    CardComponent,
    BooleanPipe,
    ForbiddenComponent,
    DietComponent,
    MessageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
