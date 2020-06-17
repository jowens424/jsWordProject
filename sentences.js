const longestWord = require('./test')

test('longestWord is a function', () => {
  expect(typeof longestWord).toEqual('function');
});

test('returns the longest word in a string of text', () => {
  expect(longestWord('wind and the willows playing tea for two') ).toEqual('Development');
});

