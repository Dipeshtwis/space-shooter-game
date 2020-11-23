const postScore = require('../util/postScore');

describe('LeaderBoard', () => {
  test('it should return the type', () => {
    postScore('Deep', 10).then(result => {
      expect(typeof result).toBe('JSON');
    }).catch(err => err);
  });

  test('it should send player name and score', () => {
    postScore('Deep', 10).then(result => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch(err => err);
  });
});
