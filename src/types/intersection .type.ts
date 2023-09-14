type Employee = {
  id: number;
  name: string;
};

type Department = {
  departmentId: number;
  departmentName: string;
};

type EmployeeWithDepartment = Employee & Department;

const john: EmployeeWithDepartment = {
  id: 1,
  name: "John",
  departmentId: 101,
  departmentName: "HR",
};
