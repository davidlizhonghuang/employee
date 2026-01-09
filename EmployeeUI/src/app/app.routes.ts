import { Routes } from '@angular/router';
import {EmployeeComponent} from './employee.component'

export const routes: Routes = [
    {path: '', redirectTo: '/employees', pathMatch: 'full'},
    {path: 'employees', component: EmployeeComponent}
];
