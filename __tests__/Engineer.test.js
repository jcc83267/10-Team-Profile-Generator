const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test(' Create an engineer object ', () => {
    const engineer = new Engineer('Dave', 123, 'something@gmail.com', 'githubDave');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('something@gmail.com');
    expect(engineer.github).toEqual(expect.any(String));
    
});

test(' gets name ', () => {
    const engineer = new Engineer('Dave', 123, 'something@gmail.com', 'githubDave');

    expect(engineer.getName()).toEqual(expect.any(String));
    
});

test(' get Id ', () => {
    const engineer = new Engineer('Dave', 123, 'something@gmail.com', 'githubDave');

    expect(engineer.getId()).toEqual(expect.any(Number)); 
});

test(' get email ', () => {
    const engineer = new Engineer('Dave', 123, 'something@gmail.com', 'githubDave');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test(' get github ', () => {
    const engineer = new Engineer('Dave', 123, 'something@gmail.com', 'githubDave');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test(' get role to be engineer ', () => {
    const engineer = new Engineer('Dave', 123, 'something@gmail.com', 'githubDave');

    expect(engineer.getRole()).toBe('Engineer');
});

