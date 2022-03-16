import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({ selector: 'lib-employee-detail', templateUrl: './employee-detail.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailComponent {
    params$ = of ([
        {name: 'Mruczek',
        imageUrl:
        "https://johndog.pl/wp-content/uploads/2020/12/Kot-perski-wpis1-KW50.jpg"},
        {name: 
            'Psotka',
        imageUrl:
        "https://www.dolina-noteci.pl/data/include/cms/Blog-DN/czy_kot_jest_najlepszym_przyjacielem_singla.jpg"},
        {name: 
            'Kropka',
        imageUrl:
        "https://ocdn.eu/pulscms-transforms/1/fb4k9kpTURBXy84NmYwMzA5ZmMwMmI4MDk3Y2I1NjM4MmI4MjVmMjY0Ny5qcGeSlQLNA8AAwsOVAgDNA8DCw4GhMAU"}
    ]);
}

