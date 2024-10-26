import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-car-comment',
  templateUrl: './car-comment.component.html',
  styleUrls: ['./car-comment.component.scss']
})
export class CarCommentComponent implements OnInit {


  cars :any = [] ;
  constructor(private sv:CustomerService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(){
    this.sv.getAllCars().subscribe((res)=>{
      console.log(res);
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
    })
  }

}
