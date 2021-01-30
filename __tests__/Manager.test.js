const { test, expect } = require('@jest/globals');
const Manager = require ('../lib/Manager');

test('Creates a new manager object', () => {
    // mock values
    const name = "Rachel";
    const id = 1;
    const email = "rachel@gmail.com";
    const officeNumber = 1;
    // pass mock values into mock manager object constructor function
    const manager = new Manager(name, id, email, officeNumber);
    
    // check that the values were populated
    expect(manager.name).toBe(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
    // check that they are in an object
    expect(typeof (manager)).toBe("object");
});

test('Methods return correct values', () => {
    // sample values
    const name = "Rachel";
    const id = 1;
    const email = 'rachel@gmail.com';
    const officeNumber = 1;
    // pass sample values into sample Engineer constructor function
    const manager = new Manager(name, id, email, officeNumber);

    // check that the methods return proper values
    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
    expect(manager.getRole()).toBe('Manager');
});