import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-employee-detail', templateUrl: './employee-detail.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailComponent {
    params$ = this.activatedRoute.params;
    constructor(private activatedRoute: ActivatedRoute) {}
}


