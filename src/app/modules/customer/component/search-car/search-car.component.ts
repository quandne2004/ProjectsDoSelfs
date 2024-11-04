import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  cars: any = [];
  isSpinning:boolean=false;
  searchCarForm!:FormGroup;
  listOfBrands = ["BMW","AUDI","FERRARI","TESLA","VOLVO","TOYOTA","HONDA","FORD","NISSAN","HYUNDAI","LEXUS","KIA"];
listOfType =["Petrol","Hybrid","Diesel","Electric","CNG"];
listOfColor=["Red","White","Blue","Black","Orange","Grey","Silver"];
listOfTranmission= ["Manual","Automatic"];
listOfNumberSeat: number[] = [2, 4, 5, 6, 7];

  constructor(private fb:FormBuilder,private sv:CustomerService) {
    this.searchCarForm = this.fb.group({
      brand:[null],
      type:[null],
      transmission:[null],
      color:[null],
      numberSeat:[null]
    })
   }

  ngOnInit() {
  }

  searchCar(){
    this.isSpinning = false;
    console.log(this.searchCarForm.value);
    this.sv.searchCar(this.searchCarForm.value).subscribe((res)=>{
      console.log(res);
      res.carDtoList.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
      this.isSpinning = false;
    })
  }

}
