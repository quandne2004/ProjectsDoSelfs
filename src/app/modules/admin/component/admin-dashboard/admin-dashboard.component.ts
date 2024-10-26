import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private admin: AdminService,private msg:NzMessageService) { }

  cars: any = [];
  ngOnInit() {
    this.getAllCar();
  }


  getAllCar(){
    this.admin.getAllCar().subscribe((res)=>{
      console.log(res);
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
    })
  }

  deleteCar(id: number){
    console.log(id);
this.admin.deleteCar(id).subscribe((res)=>{
  this.getAllCar();
  this.msg.success("Car delete success",{nzDuration:5000});
})
  }
}
