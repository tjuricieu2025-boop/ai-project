// Highlights one type of paragraph (fact, interpretation, prediction) at a time.
const buttons = document.querySelectorAll('.filters button');
const claims = document.querySelectorAll('.claim');

function applyFilter(type) {
  claims.forEach((claim) => {
    const hide = type !== 'all' && claim.dataset.type !== type;
    claim.classList.toggle('dim', hide);
  });
  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === type));
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});
