import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';

const routes: Routes = [{ 
        path: 'onas', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'pracownik', 
        loadChildren: () => EmployeesPageModule
      },
  { 
        path: 'pracownik/:name', 
        loadChildren: () => EmployeeDetailsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
