const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Creates a new Employee object', () => {
    // mock values
    const name = "Rachel";
    const id = 1;
    const email = "rachel@gmail.com";
    // pass mock values into mock Employee object constructor function
    const employee = new Employee(name, id, email);
    
    // check that the values were populated
    expect(employee.name).toBe(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toBe(email);
    // check that they are in an object
    expect(typeof (employee)).toBe("object");
});

test('Methods return correct values', () => {
    // sample values
    const name = "Rachel";
    const id = 1;
    const email = 'rachel@gmail.com';
    // pass sample values into sample Employee constructor function
    const employee = new Employee(name, id, email);

    // check that the methods return proper values
    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe('Employee');
})