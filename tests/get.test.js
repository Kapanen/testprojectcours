import get from '../src/get.js';

const object = { 'a': [{ 'b': { 'c': 3 } }] }

test('hakee pathista c:n arvon', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
});

test('hakee array muotoisella pathilla c:n arvon ', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
});

test('palauttaa default arvon, jos ei pathia löydy', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
});