import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reactive-form-demo',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent {

  title = "form-app";
  userName: string = "";
  formdata: FormGroup = new FormGroup({
    userName: new FormControl("")
  });

  onClickSubmit(data: {userName: string}){
    this.userName = data.userName;
  }


}
