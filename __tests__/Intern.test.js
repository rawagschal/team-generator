const { test, expect } = require('@jest/globals');
const Intern = require ('../lib/Intern');

test('Creates a new Intern object', () => {
    // mock values
    const name = "Rachel";
    const id = 1;
    const email = "rachel@gmail.com";
    const school = "UCLA";
    // pass mock values into mock Intern object constructor function
    const intern = new Intern(name, id, email, school);
    
    // check that the values were populated
    expect(intern.name).toBe(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
    // check that they are in an object
    expect(typeof (intern)).toBe("object");
});

test('Methods return correct values', () => {
    // sample values
    const name = "Rachel";
    const id = 1;
    const email = 'rachel@gmail.com';
    const school = "UCLA";
    // pass sample values into sample Engineer constructor function
    const intern = new Intern(name, id, email, school);

    // check that the methods return proper values
    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe('Intern');
});