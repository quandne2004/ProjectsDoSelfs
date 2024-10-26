import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


  cars : any=[];
  isSpinning:boolean = false;
  constructor(private sv:CustomerService) { }

  ngOnInit() {
    this.getAllCars();
  }
  getAllCars(){
    this.sv.getAllCars().subscribe((res)=>{
      console.log(res);
      this.isSpinning =true;
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
    })
  }

}
