export default () => {
  const element = document.createElement('form');
  element.className = 'element-space';
  element.setAttribute('action', '/');
  element.id = 'form';

  element.innerHTML = `
    <div class="form-group">
      <label for="name">Submit your name</label>
      <input type="text" name="name" id="name" class="form-control" placeholder="player name" minlength="3"
        maxlength="8">
      <p>and play</p>
    </div>
    <button type="submit" class="submit-btn" id="form-button">Space Shooter</button>
  `;

  return element;
};