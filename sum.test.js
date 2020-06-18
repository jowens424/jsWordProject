const sum = require('./test');

test('should output longest word and letter count', () => {
	expect(val({input: 'wind and the willows'})).toEqual('willows,7');
	});
