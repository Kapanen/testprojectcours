import filter from '../src/filter.js';

describe('filter', () => {
  it('filters elements based on the provided predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
    ];

    const predicate = ({ active }) => active;

    const expectedOutput = [{ 'user': 'barney', 'active': true }];

    const result = filter(users, predicate);

    expect(result).toEqual(expectedOutput);
  });

  it('handles an empty array', () => {
    const emptyArray = [];
    const predicate = () => true; // Any predicate will do for an empty array

    const expectedOutput = [[]];

    const result = filter(emptyArray, predicate);

    expect(result).toEqual(expectedOutput);
  });

  it('handles a predicate that filters out all elements', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
    ];

    const predicate = () => false; // Always false predicate

    const expectedOutput = [[]];

    const result = filter(users, predicate);

    expect(result).toEqual(expectedOutput);
  });

  it('handles a null or undefined array', () => {
    const predicate = () => true;

    // Both null and undefined arrays should result in an empty array
    const nullArray = null;
    const undefinedArray = undefined;

    const expectedOutput = [[]];

    const resultNull = filter(nullArray, predicate);
    const resultUndefined = filter(undefinedArray, predicate);

    expect(resultNull).toEqual(expectedOutput);
    expect(resultUndefined).toEqual(expectedOutput);
  });
});
