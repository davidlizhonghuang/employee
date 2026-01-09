import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { EmployeeComponent } from './app/employee.component';
import {routes} from './app/app.routes';

bootstrapApplication(EmployeeComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));


