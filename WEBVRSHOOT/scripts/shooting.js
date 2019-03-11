function destr(idd) {
  scene.removeChild(idd);
}
let shootr = 0;
var contr = document.querySelector("#controller");
var vflash = document.querySelector("#flash");
vflash.setAttribute('intensity', 0);
function makeshoot() {
  vflash.setAttribute('intensity', 0.2);
  var pointer = document.createElement('a-entity');
  var mark = document.createElement('a-entity');
  pointer.object3D.rotation.set(contr.object3D.rotation.x, contr.object3D.rotation.y, contr.object3D.rotation.z)
  mark.setAttribute('rotation', '-45 0 0')
  var shoot = document.createElement('a-sphere');
  shoot.setAttribute('id', "shooot");
  shoot.setAttribute('color', "yellow");
  shoot.setAttribute('radius', "0.05");
  shoot.setAttribute('position', '0 0 -50')
  contr.sceneEl.appendChild(pointer);
  pointer.appendChild(mark);
  mark.appendChild(shoot);
  pointer.setAttribute('position', document.querySelector('#controller').getAttribute('position'))
  var anim = document.createElement('a-animation')
  anim.setAttribute('attribute', 'position')
  anim.setAttribute('dur', '1000')
  anim.setAttribute('fill', 'backwards')
  anim.setAttribute('direction', 'reverse')
  anim.setAttribute('easing', 'linear')
  anim.setAttribute('to', '0 0.05 -0.2')
  shoot.appendChild(anim);
  if (shootr == 1 && gunnow == 2) {
    setTimeout(makeshoot, 100)
  }
  setTimeout(destr, 1000, pointer);
  setTimeout(function () { vflash.setAttribute('intensity', 0); }, 100)
}
contr.addEventListener('triggerdown', function () {
  shootr = 1;
  makeshoot();
});
contr.addEventListener('triggerup', function () {
  shootr = 0;
});