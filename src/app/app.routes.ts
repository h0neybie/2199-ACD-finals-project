import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [

    {path : 'home', component : HomeComponent},
    {path : 'td', component : TemplateDrivenFormComponent},
    {path : 'rf', component : ReactiveFormDemoComponent},
    {path : 'rfv', component : ReactiveFormValidationComponent}


];
