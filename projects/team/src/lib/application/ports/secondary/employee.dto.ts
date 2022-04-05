import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly name: string,
  readonly bio: string,
  readonly linkUrl: string,
  readonly imageUrl: string,
  readonly id: string,
  readonly department: DepartmentDTO,
}

