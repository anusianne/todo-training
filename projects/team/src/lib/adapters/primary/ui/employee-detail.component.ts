import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto'
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';
import { ActivatedRoute } from '@angular/router';

@Component
    ({
        selector: 'lib-employee-detail',
        templateUrl: './employee-detail.component.html',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    })

export class EmployeeDetailComponent {
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();
  employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne('this._activatedRoute.snapshot.params.employeeId');

    constructor(
        @Inject(GETS_ALL_EMPLOYEE_DTO)
      private _getsAllEmployeeDto: GetsAllEmployeeDtoPort,
      @Inject(GETS_ONE_EMPLOYEE_DTO)
      private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
      private _activatedRoute: ActivatedRoute
        
    ) {
  }
}