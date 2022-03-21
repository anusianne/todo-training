import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable,of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    team$: Observable<EmployeeDTO[]> = of([
        {
        id: '1',
        name: 'Full Name',
        imageUrl: "https://johndog.pl/wp-content/uploads/2020/12/Kot-perski-wpis1-KW50.jpg",
        bio: 'bla'
    },
    {
        id: '2',
        name: 'Annabelle',
        imageUrl: "https://www.dolina-noteci.pl/data/include/cms/Blog-DN/czy_kot_jest_najlepszym_przyjacielem_singla.jpg",
        bio: 'bla'
    },
    {
        id: '3',
        name: 'Soul Nielsen',
        imageUrl: "https://ocdn.eu/pulscms-transforms/1/fb4k9kpTURBXy84NmYwMzA5ZmMwMmI4MDk3Y2I1NjM4MmI4MjVmMjY0Ny5qcGeSlQLNA8AAwsOVAgDNA8DCw4GhMAU",
        bio: 'bla'
    }

]);
}



