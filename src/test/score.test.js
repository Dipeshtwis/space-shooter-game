const score = require('../util/score');

test('it return the integer type of score', () => {
  const scor = 100;
  const res = score(scor, 450);
  expect(typeof res).toEqual('number');
});

test('it returns the score value', () => {
  const scor = 100;
  expect(score(scor, 0)).toBe(100);
});

test('it return new score by adding with previous score', () => {
  const scor = 100;
  expect(score(scor, 450)).toBe(550);
});