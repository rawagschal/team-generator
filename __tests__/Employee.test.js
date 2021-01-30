const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Creates a new Employee object', () => {
    const name = "Rachel";
    const id = 1;
    const email = "rachel@gmail.com";
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toBe(email);
});