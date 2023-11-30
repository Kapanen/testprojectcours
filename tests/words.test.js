import words from '../src/words.js';

describe('words', () => {
  it('splits a string into an array of words using default pattern', () => {
    const inputString = 'fred, barney, & pebbles';

    const expectedOutput = ['fred', 'barney', 'pebbles'];

    const result = words(inputString);

    expect(result).toEqual(expectedOutput);
  });

  it('splits a string into an array of words using a custom pattern', () => {
    const inputString = 'fred, barney, & pebbles';
    const customPattern = /[^, ]+/g;

    const expectedOutput = ['fred', 'barney', '&', 'pebbles'];

    const result = words(inputString, customPattern);

    expect(result).toEqual(expectedOutput);
  });

  it('handles an empty string', () => {
    const emptyString = '';

    const expectedOutput = [];

    const result = words(emptyString);

    expect(result).toEqual(expectedOutput);
  });

  it('handles a string with only spaces', () => {
    const stringWithSpaces = '    ';

    const expectedOutput = [];

    const result = words(stringWithSpaces);

    expect(result).toEqual(expectedOutput);
  });

  it('handles a string with unicode words', () => {
    const unicodeString = 'こんにちは 世界';

    const expectedOutput = ['こんにちは', '世界'];

    const result = words(unicodeString);

    expect(result).toEqual(expectedOutput);
  });
});
