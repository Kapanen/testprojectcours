import toString from '../src/toString.js';

test('stringi säilyy stringinä', () => {
    excpect(toString('test').toBe('test'));
});

test('Luvun muuttaminen stringiksi, jos sillä on numeraalinen arvo', () => {
    expect(toString(0).toBe('0'));
});

test('Error kun annetaan tyhjä parametri', () => {
    expect(toString()).toThrow(new Error('Parameter can´t be empty'));
});

test('kun parametri on NULL muuttaan arvoksi tyhjä', () => {
    expect(toString().toBe(''));
});

test('Array muuntaminen stringiksi', () => {
    expect(toString([1, 2, 3]).toBe('1,2,3'));
});