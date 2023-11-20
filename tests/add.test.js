import add from '../../src/add.js';

test('Kahden positiivisen kokonaisluvun lisääminen', () => {
    expect(add(1, 1)).toBe(2);
});

test('Kahden negatiivisen kokonaisluvun lisääminen', () => {
    expect(add(-1, -1)).toBe(-2);
});

test('Negatiivisen ja positiivisen kokonaisluvun lisääminen', () => {
    expect(add(-1, 2)).toBe(1);
});

test('Positiivisen ja negatiivisen kokonaisluvun lisääminen', () => {
    expect(add(1, -2)).toBe(-1);
});

test('Kahden positiivisen desimaaliluvun lisääminen', () => {
    expect(add(1.53, 2.41)).toBe(3.94);
});

test('Kahden positiivisen desimaaliluvun lisääminen', () => {
    expect(add(0.1, 0.1)).toBe(0.3);
});

test('Kahden positiivisen irrationaaliluvun lisääminen', () => {
    expect(add(Math.PI, Math.PI/2)).toBe(Math.PI + (Math.PI/2));
});

test('Luvun vastaluvulla lisääminen antaa arvon 0', () => {
    expect(add(Math.PI, -Math.PI/2)).toBe(Math.PI + (-Math.PI/2));
});

test('Error kun augend on string', () => {
    expect(add("Math.PI", 1).toThrow(new Error('Parameter can´t be string')));
});

test('Error kun added on string', () => {
    expect(add(1, "Math.PI").toThrow(new Error('Parameter can´t be string')));
});

test('Error kun augend on totuusarvo', () => {
    expect(add(true, 1).toThrow(new Error('Parameter can´t be boolean')));
});

test('Error kun augend on symboli', () => {
    expect(add( Symbol("Math.PI"), 1).toThrow(new Error('Parameter can´t be symbol')));
});

test('Error kun annetaan tyhjä parametri', () => {
    expect(add(1,).toThrow(new Error('Parameter can´t be empty')));
})

test('Error kun annetaan kolme parametria', () => {
    expect(add(1,3,8).toThrow(new Error('Too many parameters')));
})

test('Error kun annetaan yksi parametri', () => {
    expect(add(3).toThrow(new Error('Too few parameters')));
})

