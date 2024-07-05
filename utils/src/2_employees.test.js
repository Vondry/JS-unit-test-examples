import { describe, it, expect } from 'vitest';
import { changeSalary, getEmployeesWithSalary, getEmployeesByDepartment } from './2_employees';

describe(getEmployeesWithSalary.name, () => {
    it('filter employees, where salary does match', () => {
        const employees = [
            { salary: 50000, name: 'Alice', department: 'Engineering' },
            { salary: 60000, name: 'Bob', department: 'Marketing' },
            { salary: 50000, name: 'Charlie', department: 'Engineering' },
            { salary: 70000, name: 'David', department: 'Sales' }
        ];

        expect(getEmployeesWithSalary(employees, 50000)).toStrictEqual([
            { salary: 50000, name: 'Alice', department: 'Engineering' },
            { salary: 50000, name: 'Charlie', department: 'Engineering' }
        ]);
    });

    it('does not return any employees for empty list of employees', () => {
        expect(getEmployeesWithSalary([], 0)).toStrictEqual([]);
    });

    it('does not return any employees, where salary does not match', () => {
        const employees = [
            { salary: 50000, name: 'Alice', department: 'Engineering' },
            { salary: 60000, name: 'Bob', department: 'Marketing' },
            { salary: 50000, name: 'Charlie', department: 'Engineering' },
            { salary: 70000, name: 'David', department: 'Sales' }
        ];

        expect(getEmployeesWithSalary(employees, 100000)).toStrictEqual([]);
    });

    it('does not mutate original employees object', () => {
        const employees = [
            { salary: 50000, name: 'Alice', department: 'Engineering' },
            { salary: 60000, name: 'Bob', department: 'Marketing' },
            { salary: 50000, name: 'Charlie', department: 'Engineering' },
            { salary: 70000, name: 'David', department: 'Sales' }
        ];

        const employeesCopy = structuredClone(employees);
        getEmployeesWithSalary(employees, 50000);
        expect(employees).toStrictEqual(employeesCopy);
    });
});

describe(changeSalary.name, () => {
    it('increases salaries for employees by 5 %', () => {
        const employees = [{ salary: 10000 }, { salary: 5000, name: 'Tomas' }];
        expect(changeSalary(employees, 5)).toStrictEqual([{ salary: 10500 }, { salary: 5250, name: 'Tomas' }]);
    });

    it('decreases salaries for employees by 5 %', () => {
        const employees = [{ salary: 10000 }, { salary: 5000, name: 'Tomas' }];
        expect(changeSalary(employees, -5)).toStrictEqual([{ salary: 9500 }, { salary: 4750, name: 'Tomas' }]);
    });

    it('does not mutate original employees object', () => {
        const employees = [
            { name: 'Alice', department: 'Engineering', salary: 50000 },
            { name: 'Bob', department: 'HR', salary: 60000 },
            { name: 'Charlie', department: 'Marketing', salary: 55000 }
        ];

        const employeesCopy = structuredClone(employees);

        changeSalary(employees, 23);
        expect(employees).toStrictEqual(employeesCopy);

        changeSalary(employees, -23);
        expect(employees).toStrictEqual(employeesCopy);
    });
});

describe(getEmployeesByDepartment.name, () => {
    it('groups employees based on department and sort them by salary', () => {
        const employees = [
            { name: 'Alice', department: 'Engineering', salary: 50000 },
            { name: 'Bob', department: 'HR', salary: 60000 },
            { name: 'Charlie', department: 'Marketing', salary: 55000 },
            { name: 'Dave', department: 'Engineering', salary: 70000 }
        ];

        const result = getEmployeesByDepartment(employees);

        expect(result).toStrictEqual({
            Engineering: [
                { name: 'Dave', department: 'Engineering', salary: 70000 },
                { name: 'Alice', department: 'Engineering', salary: 50000 }
            ],
            HR: [{ name: 'Bob', department: 'HR', salary: 60000 }],
            Marketing: [{ name: 'Charlie', department: 'Marketing', salary: 55000 }]
        });
    });

    it('does not mutate original employees object', () => {
        const employees = [
            { name: 'Alice', department: 'Engineering', salary: 50000 },
            { name: 'Bob', department: 'HR', salary: 60000 },
            { name: 'Charlie', department: 'Marketing', salary: 55000 },
            { name: 'Dave', department: 'Engineering', salary: 70000 }
        ];

        const employeesCopy = structuredClone(employees);

        getEmployeesByDepartment(employeesCopy);
        expect(employees).toStrictEqual(employeesCopy);
    });
});
