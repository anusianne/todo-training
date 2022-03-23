import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly name: string;
  readonly id: string;
  readonly imageUrl: string;
  readonly bio: string;
  readonly department: DepartmentDTO;
}
