import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-payment',
  templateUrl: './show-payment.component.html',
  styleUrls: ['./show-payment.component.scss']
})
export class ShowPaymentComponent implements OnInit {



  carFix:any;
  carFixId:number = this.active.snapshot.params["carFixId"];
  constructor(private sv:CustomerService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarFixById();
  }

  getCarFixById(){
    this.sv.getCarFixById(this.carFixId).subscribe((res)=>{
      console.log(res);
      this.carFix = res;
    })
  }

}
