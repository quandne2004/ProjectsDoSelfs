import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PostCarComponent } from './component/post-car/post-car.component';
import { HttpClientModule } from '@angular/common/http';


import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message'; // Import module này
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateCarComponent } from './component/update-car/update-car.component';
import { GetBookingsComponent } from './component/get-bookings/get-bookings.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import { SearchCarComponent } from './component/search-car/search-car.component';
import { GetALlCommentComponent } from './component/get-all-comment/get-all-comment.component';
import { CarStatusComponent } from './component/car-status/car-status.component';
import { CarFixComponent } from './component/car-fix/car-fix.component';
import { ShowPaymentComponent } from './component/show-payment/show-payment.component';
import { ContractComponent } from './component/contract/contract.component';
import { PostContractComponent } from './component/post-contract/post-contract.component';
import { RentalContractComponent } from './component/rental-contract/rental-contract.component';
import { PostRentalContractComponent } from './component/post-rental-contract/post-rental-contract.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostCarComponent,
    UpdateCarComponent,
    GetBookingsComponent,
    SearchCarComponent,
    GetALlCommentComponent,
    CarStatusComponent,
    CarFixComponent,
    ShowPaymentComponent,
    ContractComponent,
    PostContractComponent,
    RentalContractComponent,
    PostRentalContractComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,


    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzMessageModule,
    NzSelectModule,
    NzDatePickerModule,NzTimePickerModule,NzTableModule
  ]
})
export class AdminModule { }
