const game = require('../util/gameStatus');

test('it starts the game', () => {
  expect(game(true)).toBe(true);
});

test('it ends the game', () => {
  expect(game(false)).toBe(false);
});

test('it only accept boolean', () => {
  expect(game(20)).not.toBe(false || true);
});