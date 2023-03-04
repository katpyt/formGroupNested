import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroupNestedOrderComponent } from './components/form-group-nested-order/form-group-nested-order.component';
import { FormGroupNestedOrderComponentModule } from './components/form-group-nested-order/form-group-nested-order.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'form-group-nested-order', component: FormGroupNestedOrderComponent }]), FormGroupNestedOrderComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
