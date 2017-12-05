console.log('hello world');
document.addEventListener('DOMContentLoaded', () => {
  let rP = document.querySelector('#responseP');
  let cB = document.querySelector('#codyB');
  cB.addEventListener('click', (event) => {
    fetch('/cody')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = obj.msg;
    });
  });
});
