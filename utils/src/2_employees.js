/**
 * @typedef {Object} Employee
 * @property {number} salary - The current salary of the employee.
 * @property {string} name - The name of the employee.
 * @property {string} department - The department in which the employee works.
 */

/**
 * Filters the employees based on the given salary.
 *
 * @param {Employee[]} employees - Array of employee objects.
 * @param {number} salary - The salary to filter employees by.
 * @returns {Employee[]} - Array of employees that match the given salary.
 */
export const getEmployeesWithSalary = (employees, salary) => {
    return employees.filter((employee) => employee.salary === salary);
};

/**
 * Increases the salary of each employee in the provided array by a given percentage.
 * @example
 * const employees = [
 *   { name: 'Alice', department: 'Engineering', salary: 50000 },
 *   { name: 'Bob', department: 'HR', salary: 60000 },
 *   { name: 'Charlie', department: 'Marketing', salary: 55000 }
 * ];
 * const increasedSalaryForEmployees = changeSalary(employees, 10)
 *
 * @param {Array<Employee>} employees - The array of employee.
 * @param {number} percentageChangeRate - The percentage by which to increase/decrease the salaries.
 * @returns {Array<Employee>} - The updated array of employee objects with increased salaries.
 */
export const changeSalary = (employees, percentageChangeRate) => {
    const changeRate = 1 + percentageChangeRate / 100;

    return employees.map((employee) => ({
        ...employee,
        salary: employee.salary * changeRate
    }));
};

/**
 * Groups and sorts employees by department based on their salary.
 *
 * @example
 * const employees = [
 *   { name: 'Alice', department: 'Engineering', salary: 50000 },
 *   { name: 'Bob', department: 'HR', salary: 60000 },
 *   { name: 'Charlie', department: 'Marketing', salary: 55000 },
 *   { name: 'Dave', department: 'Engineering', salary: 70000 }
 * ];
 * const sortedGroupedEmployees = getEmployeesByDepartment(employees);
 * // {
 * //   Engineering: [
 * //     { name: 'Dave', department: 'Engineering', salary: 70000 },
 * //     { name: 'Alice', department: 'Engineering', salary: 50000 }
 * //   ],
 * //   HR: [
 * //     { name: 'Bob', department: 'HR', salary: 60000 }
 * //   ],
 * //   Marketing: [
 * //     { name: 'Charlie', department: 'Marketing', salary: 55000 }
 * //   ]
 * // }
 *
 * @param {Array<Employee>} employees - The array of employee objects.
 * @returns {Object<string, Array<Employee>>} - An object where keys are department names and values are arrays of employees sorted by salary in descending order. Employees without a department are grouped under the key "no-dep".
 */
export const getEmployeesByDepartment = (employees) => {
    const groupedEmployeesByDepartment = employees.reduce((acc, employee) => {
        const group = acc[employee.department] ?? [];
        acc[employee.department] = [...group, employee];
        return acc;
    }, {});

    Object.keys(groupedEmployeesByDepartment).forEach((department) => {
        groupedEmployeesByDepartment[department].sort((a, b) => b.salary - a.salary);
    });

    return groupedEmployeesByDepartment;
};
