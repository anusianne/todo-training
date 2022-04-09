import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { Observable } from 'rxjs';
import { GetsAllEmployeeDtoPort, GETS_ALL_EMPLOYEE_DTO } from '../../../application/ports/secondary/gets-all-employee.dto-port';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class OurTeamComponent {

    employeeList$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll(); 
    
    constructor(
        @Inject(GETS_ALL_EMPLOYEE_DTO)
        private _getsAllEmployeeDto: GetsAllEmployeeDtoPort,
    ) {}
}
