const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test(' Create an manager object ', () => {
    const manager = new Manager('Dave', 123, 'something@gmail.com', 111);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('something@gmail.com')
    expect(manager.officeNumber).toEqual(expect.any(Number));
    
});

test(' gets name ', () => {
    const manager = new Manager('Dave', 123, 'something@gmail.com', 111);

    expect(manager.getName()).toEqual(expect.any(String));
    
});

test(' get Id ', () => {
    const manager = new Manager('Dave', 123, 'something@gmail.com', 111);

    expect(manager.getId()).toEqual(expect.any(Number)); 
});

test(' get email ', () => {
    const manager = new Manager('Dave', 123, 'something@gmail.com', 111);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test(' get role to be Manager ', () => {
    const manager = new Manager('Dave', 123, 'something@gmail.com', 111);

    expect(manager.getRole()).toBe('Manager');
});

