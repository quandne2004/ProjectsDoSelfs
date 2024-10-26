import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-car-fix-details',
  templateUrl: './car-fix-details.component.html',
  styleUrls: ['./car-fix-details.component.scss']
})
export class CarFixDetailsComponent implements OnInit {

  carFix:any;
  contents:any;
  isSpinning:boolean= false;
  constructor(private sv:CustomerService) { }

  ngOnInit(): void {
    this.getAllCarFixDetails();
  }

  getAllCarFixDetails(){
    this.sv.getAllCafix().subscribe((res)=>{
      this.carFix = res;
      console.log(res);
    })
  }

}
