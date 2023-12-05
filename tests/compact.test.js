import compact from '../src/compact.js';

describe('compact', () => {
  it('removes falsey values from the array', () => {
    const inputArray = [0, 1, false, 2, '', 3, true];
    const expectedOutput = [1, 2, 3, true];
  
    const result = compact(inputArray);

    expect(result).toEqual(expectedOutput);
  });
  
  /*it('handles an array with no falsey values', () => {
    const inputArray = [1, 'hello', true];
    const expectedOutput = [1, 'hello', true];

    const result = compact(inputArray);

    expect(result).toEqual(expectedOutput);
  });*/

  it('handles an empty array', () => {
    const inputArray = [];
    const expectedOutput = [];

    const result = compact(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  it('handles an array with all falsey values', () => {
    const inputArray = [false, null, 0, '', undefined, NaN];
    const expectedOutput = [];

    const result = compact(inputArray);

    expect(result).toEqual(expectedOutput);
  });
});
