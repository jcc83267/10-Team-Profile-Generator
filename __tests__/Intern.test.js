const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test(' Create an intern object ', () => {
    const intern = new Intern('Dave', 123, 'something@gmail.com', 'schoolDave');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('something@gmail.com');
    expect(intern.school).toEqual(expect.any(String));
    
});

test(' gets name ', () => {
    const intern = new Intern('Dave', 123, 'something@gmail.com', 'schoolDave');

    expect(intern.getName()).toEqual(expect.any(String));
    
});

test(' get Id ', () => {
    const intern = new Intern('Dave', 123, 'something@gmail.com', 'schoolDave');

    expect(intern.getId()).toEqual(expect.any(Number)); 
});

test(' get email ', () => {
    const intern = new Intern('Dave', 123, 'something@gmail.com', 'schoolDave');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test(' get school ', () => {
    const intern = new Intern('Dave', 123, 'something@gmail.com', 'schoolDave');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test(' get role to be intern ', () => {
    const intern = new Intern('Dave', 123, 'something@gmail.com', 'schoolDave');

    expect(intern.getRole()).toBe('Intern');
});

