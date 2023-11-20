import isEmpty from '../src/isEmpty.js';

test('tyhjällä arvolla saadaan arvon totuus arvo true', () => {
    expect(isEmpty().toBe(true));
});

test('totuus arvolla true saadaan arvo true', () => {
    expect(isEmpty(true).toBe(true));
});

test('boolean arvolla 1 saadaan true', () => {
    expect(isEmpty(1).toBe(true));
});

test('array arvolla saadaan arvoksi false', () => {
    expect(isEmpty([1, 2, 3]).toBe(false));
});

test('stringit antavat arvon false', () => {
    expect(isEmpty('abc').toBe(false));
});

test('objecti jonka arvo on 1 antaa arvoksi falsen sillä se ei ole boolean arvo', () => {
    expect(isEmpty({'a' : 1}).toBe(false));
});