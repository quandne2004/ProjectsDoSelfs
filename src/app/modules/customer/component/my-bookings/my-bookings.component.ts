import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  bookings : any;
  isSpinning: boolean=false;
  constructor(private sv:CustomerService) { 
    this.getMyBookings();
  }

  ngOnInit() {
  }

  getMyBookings(){
    this.sv.getBookingByUserId().subscribe((res)=>{
      console.log(res);
      this.bookings = res;
    })
  }

}
