import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkoutForm:FormGroup;
  sevyForm = {
    email: "",
    password: ""
  };

  isSubmit:boolean = false;

  constructor( private formBuilder: FormBuilder,private router: Router,) { 
    this.checkoutForm = this.formBuilder.group({
      email : new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password : new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ),
    });
  }

  ngOnInit() {}
  

  onSubmit(userData) {
    this.checkoutForm.reset();
    this.router.navigate(["pages/dashboard"])
  }



}
