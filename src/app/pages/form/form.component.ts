import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  login = new FormGroup({
    username:new FormControl("",[
      Validators.required,
      Validators.minLength(4)
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
  });

  onSubmit(){
    if (this.login.valid) {
      // this.submitted = true;
      console.log(this.login.value);
    }
  }

}
