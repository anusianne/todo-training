import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'app-employee-details-page', templateUrl: './employee-details.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailsPage
{
    params$ = this.activatedRoute.params;
    constructor(private activatedRoute: ActivatedRoute) {}

}
