let elementInput = document.getElementById('pass');

document.getElementById('btn').onclick = function () {
  if (elementInput.getAttribute('type') == 'password')
    elementInput.setAttribute('type', 'text');
  else if (elementInput.getAttribute('type') == 'text')
    elementInput.setAttribute('type', 'password');
};

// let colors = ['red', 'blue', 'pink', 'green', 'black'];

// let i = 0;
// setInterval(function () {
//   document.body.style.backgroundColor = colors[i];
//   i++;
//   if (i >= colors.length) {
//     i = 0;
//   }
// }, 500);

// setInterval(function () {
//   let currentDate = new Date();
//   document.getElementById('clock').innerText = currentDate.toLocaleString();
// }, 1000);
