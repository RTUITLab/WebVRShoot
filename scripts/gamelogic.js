var decoys = document.querySelectorAll('#target'), j;
for (j = 0; j < decoys.length; ++j) {
  decoys[j].setAttribute('state', 'down')
  decoys[j].addEventListener('up', function () {
    setTimeout(function swap(ob) {
      call();
      if (ob.getAttribute('state') == 'up') {
        setTimeout(function () { ob.setAttribute("state", "down") }, 1000);
        ob.setAttribute("state", "sw")
        ob.emit("down")
      }
    }, 7000, this)
  })
}
function call() {
  worker = decoys[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
  if (worker.getAttribute('state') == 'up' || worker.getAttribute('state') == 'sw')
    call()
  if (worker.getAttribute('state') == 'down') {
    worker.emit('up')
    worker.setAttribute('state', 'sw')
    setTimeout(function (ob) { ob.setAttribute('state', 'up') }, 1000, worker)
  }
}
let time = 150;
let score = 0;
let unt = true
let but = document.querySelector('#playbutton')
but.addEventListener('collide', function (event) {
  if (unt) {
    for (j = 0; j < decoys.length; ++j) {
      decoys[j].setAttribute('state', 'down')
    }
    time = 150;
    call();
    setTimeout(call, 5000)
    setTimeout(call, 15000)
    setTimeout(call, 25000)
    console.log('start timer')
    unt = false;
    score = 0;
    document.querySelector('#score').setAttribute('value', 'Score: ' + score);
    but.setAttribute('visible', 'false')
    setTimeout(countdown_timer, 1);
  }

});
function countdown_timer() {
  time--;
  if (time > 0) {
    setTimeout(countdown_timer, 1000);
  }
  else {
    for (j = 0; j < decoys.length; ++j) {
      decoys[j].setAttribute('state', 'off')
      decoys[j].emit('down')
    }
    unt = true
    but.setAttribute('visible', 'true')
  }
  document.querySelector('#timer').setAttribute('value', 'Time: ' + time);
}
