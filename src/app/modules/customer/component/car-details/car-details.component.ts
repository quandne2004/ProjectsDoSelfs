import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {


  cars :any;
  carId:number = this.active.snapshot.params["carId"];
  constructor(private sv:CustomerService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarById();
  }


  // getAllCar(){
  //   this.sv.getAllCars().subscribe((res)=>{
  //     console.log(res);
  //     this.cars = res;
  //     res.forEach((element: { processedImg: string; returnedImage: string; }) => {
  //       element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
  //       this.cars.push(element);
  //     });
  //   })
  // }


  getCarById(){
    this.sv.getCarById(this.carId).subscribe((res=>{
      console.log(res);
      // this.getAllCar();
      this.cars = res;
      this.cars.processedImg = 'data:image/jpeg;base64,' + this.cars.returnedImage;
    }))
  }

}
