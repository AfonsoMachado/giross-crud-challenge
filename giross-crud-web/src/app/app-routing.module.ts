import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLoginComponent } from './views/admin-login/admin-login.component';
import { CustomerCrudComponent } from './views/customer-crud/customer-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: AdminLoginComponent,
  },
  {
    path: 'customers',
    component: CustomerCrudComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/create',
    component: CustomerCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/update/:id',
    component: CustomerUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/delete/:id',
    component: CustomerDeleteComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
