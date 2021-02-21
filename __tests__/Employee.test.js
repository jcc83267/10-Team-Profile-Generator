const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test(' Create an Employee object ', () => {
    const employee = new Employee('Dave', 123, 'something@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('something@gmail.com');
    
});

test(' gets name ', () => {
    const employee = new Employee('Dave', 123, 'something@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    
});

test(' get Id ', () => {
    const employee = new Employee('Dave', 123, 'something@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
    
});

test(' get email ', () => {
    const employee = new Employee('Dave', 123, 'something@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
    
});

test(' get role ', () => {
    const employee = new Employee('Dave', 123, 'something@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});

