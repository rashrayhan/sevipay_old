export class Payment{
    name:string;
    date:string;
    state:string
    status:Number;
    constructor(name:string,date:string,state:string,status:Number){
      this.name = name;
      this.date = date;
      this.state = state;
      this.status = status;
    }
  } 