import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  title = "template-form-app"  
  name: string = "";
  email: string = "";
  message: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

}
