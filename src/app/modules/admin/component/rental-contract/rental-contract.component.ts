import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-rental-contract',
  templateUrl: './rental-contract.component.html',
  styleUrls: ['./rental-contract.component.scss']
})
export class RentalContractComponent implements OnInit {


  rentalContracts:any;
  constructor(private sv:AdminService) { }

  ngOnInit(): void {
    this.getAllContract();
  }


  getAllContract(){
    this.sv.getAllRentalContract().subscribe((res)=>{
      console.log(res);
      this.rentalContracts = res;
    })
  }
}
