import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss']
})
export class BookCarComponent implements OnInit {


  carId:any;
  car: any;
  bookACarId:any;
  listOfPayment =["TechCombank:19036320228013","Come to Shop and paid"]
  processedImage: any;
  postCarForm!:FormGroup;
  dateFormat! : "DD-MM-YYYY";
  isSpinning:boolean =false;
  bookings: any;
  constructor( private sv:CustomerService,private active:ActivatedRoute,private fb:FormBuilder,private msg:NzMessageService,private route:Router) {
    this.carId = this.active.snapshot.params["id"];
  
   }

  ngOnInit() {
    this.getCarById();
    this.postCarForm = this.fb.group({
      toDate: [null,Validators.required],
      fromDate:[null,Validators.required],
      payment:[null,[Validators.required]]
    })
  }

  getCarById(){
    this.sv.getCarById(this.carId).subscribe((res)=>{
      console.log(res);
      this.processedImage = 'data:image/jpeg;base64,' + res.returnedImage;
      this.car = res;
    })
  }


  

  bookACar(data:any){
    console.log(data);
    const bookACarDto ={
      toDate: data.toDate,
      fromDate:data.fromDate,
      payment:data.payment,
      userId:StorageService.getUserId(),
      carId:this.carId
    }
    
    // const formData= new FormData();
    // formData.append("toDate",this.postCarForm.get("toDate")?.value);
    // formData.append("fromDate",this.postCarForm.get("fromDate")?.value);
    // formData.append("userId",StorageService.getUserId());
    // formData.append("carId",this.carId)

    this.sv.bookACar(this.carId,bookACarDto).subscribe((res)=>{
      console.log(res);
      this.msg.success("Booking is SuccessFully",{nzDuration:5000});
      this.route.navigateByUrl("/customer/my_bookings");
    },error =>{
      this.msg.error("Something went wrong",{nzDuration:5000});
    })
  }

}
