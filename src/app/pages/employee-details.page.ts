import { 
    Component, 
    ViewEncapsulation, 
    ChangeDetectionStrategy, 
    OnInit,
 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ 
    selector: 'lib-employee-details-page', 
    templateUrl: './employee-details.page.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush,
 })
export class EmployeeDetailsPage {
    params$ = this.activatedRoute.params;
    constructor(private activatedRoute: ActivatedRoute) {}
}



