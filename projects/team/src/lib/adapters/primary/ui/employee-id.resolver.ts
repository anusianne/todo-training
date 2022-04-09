import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { DATA_DTO_STORAGE, DataDtoStoragePort } from '../../../application/ports/secondary/data-dto.storage-port';

@Injectable()
export class EmployeeIdResolver
  implements Resolve<boolean> {
  constructor(@Inject(DATA_DTO_STORAGE)
  private _dataDtoStorage: DataDtoStoragePort) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean> {
    this._dataDtoStorage.next({ employeeId: route.params.employeeId });
    return of(true);;
  }
}
