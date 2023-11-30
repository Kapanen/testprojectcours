import countBy from '../src/countBy.js';

const users1 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
];

const users2 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': true },
    { 'user': 'tom', 'active': false }
];

const users3 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'tom', 'active': false },
];

const users4 = [

];

test('Count that there are two active user and one not', () => {
    expect(countBy(users1, value => value.active)).toStrictEqual({'true' : 2, 'false' : 1});
});


test('Count that there are three active user and one not', () => {
    expect(countBy(users2, value => value.active)).toStrictEqual({'true' : 3, 'false' : 1});
});

test('Count that there are no users with same name', () => {
    expect(countBy(users3, value => value.user)).toStrictEqual({'barney': 0, 'betty': 0, 'tom': 0, 'fred': 0 });
});

test('CountBy() return empty objet if object array is empty', () => {
    expect(countBy(users4, value => value.user)).toStrictEqual({});
});