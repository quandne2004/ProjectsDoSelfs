import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';

@Component({
  selector: 'app-car-status',
  templateUrl: './car-status.component.html',
  styleUrls: ['./car-status.component.scss']
})
export class CarStatusComponent implements OnInit {


  cars:any;
  isSpinning:boolean = false;
  constructor(private sv:AdminService,private notice:NzMessageService) { }

  ngOnInit(): void {
    this.getAllCar();
  }

  getAllCar(){
    this.sv.getAllCar().subscribe((res)=>{
      console.log(res);
      this.cars = res;
    })
  }

  changeCarStatus(carId:number,status:string){
    this.sv.changeCarStatus(carId,status).subscribe((res)=>{
      console.log(res);
      this.getAllCar();
      this.notice.success("Change Success",{nzDuration:5000})
    },error=>{
      this.notice.success("Error",{nzDuration:5000})
    })
  }

}
