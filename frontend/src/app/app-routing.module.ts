import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { BestofComponent } from './page/bestof/bestof.component';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { BillListComponent } from './page/bill-list/bill-list.component';
import { ContactComponent } from './page/contact/contact.component';
import { FoodEditComponent } from './page/food-edit/food-edit.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { HomeComponent } from './page/home/home.component';
import { InformationComponent } from './page/information/information.component';
import { LoginComponent } from './page/login/login.component';
import { NutrientEditComponent } from './page/nutrient-edit/nutrient-edit.component';
import { NutrientListComponent } from './page/nutrient-list/nutrient-list.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { ProfilComponent } from './page/profil/profil.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserListComponent } from './page/user-list/user-list.component';
import { AuthGuardService } from './service/auth-guard.service';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { RoleGuardService } from './service/role-guard.service';
import { DietComponent } from './page/diet/diet.component';
import { MessageComponent } from './page/message/message.component';
import { RegistrationComponent } from './page/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'foods/diet/:category',
    component: DietComponent,
  },
  {
    path: 'information',
    component: InformationComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'bestof',
    component: BestofComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    },
    children: [
      {
        path: 'food',
        component: FoodListComponent,
      },
      {
        path: 'food/:_id',
        component: FoodEditComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: {
          expectedRole: 3,
        },
      },
      {
        path: 'nutrient',
        component: NutrientListComponent,
      },
      {
        path: 'nutrient/:_id',
        component: NutrientEditComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: {
          expectedRole: 3,
        },
      },
      {
        path: 'order',
        component: OrderListComponent,
      },
      {
        path: 'order/:_id',
        component: OrderEditComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: {
          expectedRole: 3,
        },
      },
      {
        path: 'user',
        component: UserListComponent,
      },
      {
        path: 'user/:_id',
        component: UserEditComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: {
          expectedRole: 3,
        },
      },
      {
        path: 'bill',
        component: BillListComponent,
      },
      {
        path: 'bill/:_id',
        component: BillEditComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: {
          expectedRole: 3,
        },
      },
      {
        path: 'message',
        component: MessageComponent,
      },
    ],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
