import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerCrudComponent } from './views/customer-crud/customer-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customers',
    component: CustomerCrudComponent,
  },
  {
    path: 'customers/create',
    component: CustomerCreateComponent,
  },
  {
    path: 'customers/update/:id',
    component: CustomerUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
