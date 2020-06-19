const longestWord = require('./test')

test('longestWord is a function', () => {
  expect(typeof longestWord).toEqual('function');
})

test('"wind and willows" for the longest word', () => {
  expect(longestWord('willows')).toBeTruthy()
})






