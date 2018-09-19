var decoys = document.querySelectorAll('#target'), j;
for (j = 0; j < decoys.length; ++j) {
  decoys[j].setAttribute('state', 'down')
  decoys[j].addEventListener('up', function () {
    setTimeout(function swap(ob, gm) {
      if (game==gm)
      {
      call();
      if (ob.getAttribute('state') == 'up') {
        setTimeout(function () { ob.setAttribute("state", "down") }, 1000);
        ob.setAttribute("state", "sw")
        ob.emit("down")
      }
      }
    }, 7000, this, game)
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
function callm() {
  let randx=-15+Math.random()*30
  mt.setAttribute('position',{x:randx ,y:15,z:-16})
  mt.setAttribute('visible','true')
  setTimeout(function(){ mt.setAttribute('visible','false')},5000)
}
let mt= document.querySelector('#mtar')
let game=0
let record = 0;
let gunnow= 1;
let time = 50;
let score = 0;
let unt = true
let but = document.querySelector('#playbutton')
console.log( gun1b.object3D.getWorldPosition().x)
but.addEventListener('collide', function (event) {
  if (unt) {
    for (j = 0; j < decoys.length; ++j) {
      decoys[j].setAttribute('state', 'down')
    }
    game+=1;
    time = 50;
    call();
    setTimeout(call, 5000)
    setTimeout(callm, 15000)
    setTimeout(call, 25000)
    setTimeout(callm, 35000)
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
    if (score>record)
    {
      record=score;
      document.querySelector('#rec').setAttribute('value', 'Highscore:\n' + record);
    }
    unt = true
    but.setAttribute('visible', 'true')
  }
  document.querySelector('#timer').setAttribute('value', 'Time: ' + time);
}
