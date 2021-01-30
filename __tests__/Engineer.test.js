const { test, expect } = require('@jest/globals');
const Engineer = require ('../lib/Engineer');

test('Creates a new Engineer object', () => {
    // mock values
    const name = "Rachel";
    const id = 1;
    const email = "rachel@gmail.com";
    const github = "rawagschal";
    // pass mock values into mock Engineer object constructor function
    const engineer = new Engineer(name, id, email, github);
    
    // check that the values were populated
    expect(engineer.name).toBe(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
    // check that they are in an object
    expect(typeof (engineer)).toBe("object");
});

test('Methods return correct values', () => {
    // sample values
    const name = "Rachel";
    const id = 1;
    const email = 'rachel@gmail.com';
    const github = "rawagschal";
    // pass sample values into sample Engineer constructor function
    const engineer = new Engineer(name, id, email, github);

    // check that the methods return proper values
    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getRole()).toBe('Engineer');
});