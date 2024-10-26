import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-comment',
  templateUrl: './my-comment.component.html',
  styleUrls: ['./my-comment.component.scss']
})
export class MyCommentComponent implements OnInit {


  isSpinning:boolean = false;
  comments:any;
  constructor(private sv:CustomerService) { }

  ngOnInit(): void {
    this.getCommentByUserId();
  }

  getCommentByUserId(){
    this.sv.getCommentByUserId().subscribe((res)=>{
      console.log(res);
      this.comments = res;
    })
  }

}
