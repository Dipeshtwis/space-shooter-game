const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const apiKey = '37Fz5s5O6RE1untiAU8M';

const sendScore = async (name, score) => {
  const response = await fetch(`${url}/games/${apiKey}/scores`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: Number(score) }),
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};

const getScores = async () => {
  const response = await fetch(`${url}/games/${apiKey}/scores`, {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};

export { sendScore, getScores };