const longestWord = require('./test')

test('longestWord is a function', () => {
  expect(typeof longestWord).toEqual('function');
});

test('returns the longest word and word length', () => {
  expect(longestWord('wind in the willows') ).toEqual('willows,7');
});

