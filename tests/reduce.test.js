import reduce from "../src/reduce";

describe('reduce', () => {
  it('reduces an array to the accumulated value', () => {
    const array = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;
    const initialValue = 0;

    const expectedOutput = 6;

    const result = reduce(array, iteratee, initialValue);

    expect(result).toEqual(expectedOutput);
  });

  it('reduces an object to the accumulated value', () => {
    const obj = { 'a': 1, 'b': 2, 'c': 1 };
    const iteratee = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };
    const initialValue = {};

    const expectedOutput = { '1': ['a', 'c'], '2': ['b'] }; // Order not guaranteed

    const result = reduce(obj, iteratee, initialValue);

    expect(result).toEqual(expectedOutput);
  });

  it('handles a missing accumulator for arrays', () => {
    const array = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;

    const expectedOutput = 6;

    const result = reduce(array, iteratee);

    expect(result).toEqual(expectedOutput);
  });


  it('handles an empty array', () => {
    const emptyArray = [];
    const iteratee = () => true; // Any iteratee will do for an empty array
    const initialValue = 10;

    const expectedOutput = 10;

    const result = reduce(emptyArray, iteratee, initialValue);

    expect(result).toEqual(expectedOutput);
  });

  it('handles an empty object', () => {
    const emptyObject = {};
    const iteratee = () => true; // Any iteratee will do for an empty object
    const initialValue = 'initial';

    const expectedOutput = 'initial';

    const result = reduce(emptyObject, iteratee, initialValue);

    expect(result).toEqual(expectedOutput);
  });

  it('handles null or undefined collection', () => {
    const iteratee = () => true; // Any iteratee will do for null or undefined

    // Both null and undefined collections should result in initialValue
    const nullCollection = null;
    const undefinedCollection = undefined;
    const initialValue = 'default';

    const expectedOutput = 'default';

    const resultNull = reduce(nullCollection, iteratee, initialValue);
    const resultUndefined = reduce(undefinedCollection, iteratee, initialValue);

    expect(resultNull).toEqual(expectedOutput);
    expect(resultUndefined).toEqual(expectedOutput);
  });
});
