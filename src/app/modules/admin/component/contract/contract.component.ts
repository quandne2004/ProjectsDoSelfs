import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {


  contracts:any;
  constructor(private sv:AdminService) { }

  ngOnInit(): void {
    this.getAllContract();
  }

  getAllContract(){
    this.sv.getAllContract().subscribe((res)=>{
      this.contracts = res;
      console.log(res);
    })
  }
}
