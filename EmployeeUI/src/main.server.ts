import { bootstrapApplication } from '@angular/platform-browser';

import {EmployeeComponent} from './app/employee.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(EmployeeComponent, config);

export default bootstrap;
