import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-contract',
  templateUrl: './post-contract.component.html',
  styleUrls: ['./post-contract.component.scss']
})
export class PostContractComponent implements OnInit {


  postForm!:FormGroup;
  constructor(private sv:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      
    })
  }

}
