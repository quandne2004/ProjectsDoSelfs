import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';

@Component({
  selector: 'app-post-rental-contract',
  templateUrl: './post-rental-contract.component.html',
  styleUrls: ['./post-rental-contract.component.scss']
})
export class PostRentalContractComponent implements OnInit {


  postForm!:FormGroup;
  constructor(private sv:AdminService,private fb:FormBuilder,private msg:NzMessageService) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      customerName:[null,[Validators.required]],
      customerIdNumber:[null,[Validators.required]],
      customerEmail:[null,[Validators.required]],
      carId:[null,[Validators.required]],
      carName:[null,[Validators.required]],
      carBrand:[null,[Validators.required]],
      carModel:[null,[Validators.required]],
      yearOfManufacture:[null,[Validators.required]],
      carColor:[null,[Validators.required]],
      bookACarId:[null,[Validators.required]],
      paymentMethod:[null,[Validators.required]],
      maintenanceTerms:[null,[Validators.required]],
      usageTerms:[null,[Validators.required]],
      terminationTerms:[null,[Validators.required]]
    })
  }
  

  postRentalContract(){
    this.sv.postRentalContract(this.postForm.value).subscribe((res)=>{
      this.msg.success("Success",{nzDuration:5000})
    },error=>{
      this.msg.error("Error",{nzDuration:5000})
    })
  }

}
