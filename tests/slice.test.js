import slice from '../src/slice.js';

describe('slice', () => {
  it('creates a slice of an array from start to end', () => {
    const array = [1, 2, 3, 4];
    const start = 2;
    const end = 4;

    const expectedOutput = [3, 4];

    const result = slice(array, start, end);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a slice from start to the end of the array if end is not provided', () => {
    const array = [1, 2, 3, 4];
    const start = 2;

    const expectedOutput = [3, 4];

    const result = slice(array, start);

    expect(result).toEqual(expectedOutput);
  });

  it('creates a slice from 0 to the end of the array if start is negative', () => {
    const array = [1, 2, 3, 4];
    const start = -2;

    const expectedOutput = [3, 4];

    const result = slice(array, start);

    expect(result).toEqual(expectedOutput);
  });

  it('creates an empty slice for an empty array', () => {
    const emptyArray = [];
    const start = 1;
    const end = 3;

    const expectedOutput = [];

    const result = slice(emptyArray, start, end);

    expect(result).toEqual(expectedOutput);
  });

  it('handles negative end values correctly', () => {
    const array = [1, 2, 3, 4];
    const start = 1;
    const end = -1;

    const expectedOutput = [2, 3];

    const result = slice(array, start, end);

    expect(result).toEqual(expectedOutput);
  });

  it('handles negative start values correctly', () => {
    const array = [1, 2, 3, 4];
    const start = -3;
    const end = 3;

    const expectedOutput = [2, 3];

    const result = slice(array, start, end);

    expect(result).toEqual(expectedOutput);
  });

  it('handles null or undefined array', () => {
    const start = 1;
    const end = 3;

    // Both null and undefined arrays should result in an empty array
    const nullArray = null;
    const undefinedArray = undefined;

    const expectedOutput = [];

    const resultNull = slice(nullArray, start, end);
    const resultUndefined = slice(undefinedArray, start, end);

    expect(resultNull).toEqual(expectedOutput);
    expect(resultUndefined).toEqual(expectedOutput);
  });
});
