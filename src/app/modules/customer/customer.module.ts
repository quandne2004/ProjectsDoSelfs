import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './component/customer/customer.component';
import { BookCarComponent } from './component/book-car/book-car.component';


import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message'; // Import module này
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyBookingsComponent } from './component/my-bookings/my-bookings.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import { SearchCarComponent } from './component/search-car/search-car.component';
import { CarDetailsComponent } from './component/car-details/car-details.component';
import { PostCommentComponent } from './component/post-comment/post-comment.component';
import { CarCommentComponent } from './component/car-comment/car-comment.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { MyCommentComponent } from './component/my-comment/my-comment.component';
import { CarFixComponent } from './component/car-fix/car-fix.component';
import { CarFixDetailsComponent } from './component/car-fix-details/car-fix-details.component';
import { ShowPaymentComponent } from './component/show-payment/show-payment.component';
@NgModule({
  declarations: [
    CustomerComponent,
    BookCarComponent,
    MyBookingsComponent,
    SearchCarComponent,
    CarDetailsComponent,
    PostCommentComponent,
    CarCommentComponent,
    MyCommentComponent,
    CarFixComponent,
    CarFixDetailsComponent,
    ShowPaymentComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzMessageModule,
    NzSelectModule,
    NzDatePickerModule,NzTimePickerModule,
    NzTableModule,
    NzRateModule,
    NzCommentModule
  ]
})
export class CustomerModule { }
