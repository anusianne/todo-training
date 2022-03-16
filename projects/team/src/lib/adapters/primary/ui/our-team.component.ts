import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    employee: EmployeeDTO = {
        title: "Główny Dyspozytor", 
        image: "https://johndog.pl/wp-content/uploads/2020/12/Kot-perski-wpis1-KW50.jpg",
        
    }

    employee2: EmployeeDTO = {
        title: "Koordynator ds. zabawy i polowania",
        image: "https://johndog.pl/wp-content/uploads/2020/12/Kot-perski-wpis1-KW50.jpg"
        
    }
}



