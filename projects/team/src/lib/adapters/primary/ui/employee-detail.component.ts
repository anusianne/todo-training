import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';
import { switchMap } from 'rxjs/operators';
import { DATA_DTO_STORAGE, DataDtoStoragePort } from '../../../application/ports/secondary/data-dto.storage-port';

@Component
    ({
        selector: 'lib-employee-detail',
        templateUrl: './employee-detail.component.html',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    })

export class EmployeeDetailComponent {
  employee$: Observable<EmployeeDTO> = this._dataDtoStoragePort
    .asObservable()
    .pipe(switchMap(data => this._getsOneEmployeeDto.getOne(data.employeeId)
    )
    );

    constructor(
      @Inject(GETS_ONE_EMPLOYEE_DTO)
      private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
      @Inject(DATA_DTO_STORAGE)
      private _dataDtoStoragePort: DataDtoStoragePort
     ) {}
}

