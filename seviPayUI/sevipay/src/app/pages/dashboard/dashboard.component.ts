import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/paymentmodel';
import {MatBottomSheet } from '@angular/material';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  payments:Array<Payment> = [
    new Payment("Rasheed","23-12-2009","Anambra",1),
    new Payment("Bendevet","24-12-2009","Anambra",1),
    new Payment("Milanochka","25-12-2009","Anambra",1),
    new Payment("Mubarak","26-12-2009","Anambra",2),
    new Payment("Echee","27-12-2009","Anambra",2),
    new Payment("Luchy","28-12-2009","Anambra",3),
  ];

  logs = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  ]

  page = "payments";
  opened:boolean = false;

  payment:Payment;

   statuses=[
     {status:"Two",value:2},
     {status:"Three",value:3},
    ];

    isStatus:boolean=false;

    selectedstatus:Number = null;

  constructor(private _bottomSheet: MatBottomSheet) { 

  }

  ngOnInit() {

  }

  showStatusOption(): void {
    this.isStatus = true;
  }

  updateStatus():void{
    if(this.selectedstatus!=null){
      this.updateList();
      this.isStatus= false;
    }
   
  }

  updateList():void{
   let index = this.payments.findIndex((arg)=>arg.name==this.payment.name);
   this.payments[index].status = this.selectedstatus;
  }


  show(type:string):void {
    this.opened = false;
    this.page=type;
  }

  openPayment(payment:Payment){
    this.payment = payment;
    this.opened = true;
  }

}


