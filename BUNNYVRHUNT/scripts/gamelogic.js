let curs = document.querySelector("#Curs");
var contr = document.querySelector("#controller");
var cam = document.querySelector("#Cam");
var bun = document.querySelector("#bunny");
var head = document.querySelector("#Head");
bun.addEventListener('collide', function (event) {
    bun.setAttribute('visible', "false")
    console.log(bun.getAttribute('beast'))
    var nowhp=bun.getAttribute('beast').hp
    bun.setAttribute('beast','hp',nowhp-50)
    setTimeout(function(id){bun.setAttribute('visible', "true")},1000,bun)
});
contr.addEventListener('controllerdisconnected', function () {
    head.setAttribute('wasd-controls-enabled', "true")
    contr.setAttribute('visible', 'false')
    curs.setAttribute('visible', 'false')
    bun.setAttribute('visible', 'false')
});
contr.addEventListener('controllerconnected', function () {
    head.setAttribute('wasd-controls-enabled', "false")
    contr.setAttribute('visible', 'true')
    curs.setAttribute('visible', 'true')
    bun.setAttribute('visible', 'true')
});
/*function makeshoot2() {
    var pointer = document.createElement('a-entity');
    var mark = document.createElement('a-entity');
    pointer.setAttribute('rotation',head.getAttribute('rotation'))
    mark.setAttribute('rotation', '0 0 0')
    var shoot = document.createElement('a-sphere');
    shoot.setAttribute('id', "shooot");
    shoot.setAttribute('color', "yellow");
    shoot.setAttribute('radius', "0.05");
    shoot.setAttribute('position', '0 0 -50')
    contr.sceneEl.appendChild(pointer);
    pointer.appendChild(mark);
    mark.appendChild(shoot);
    pointer.setAttribute('position', (head.object3D.position.x) + ' ' + (head.object3D.position.y) + ' ' + (head.object3D.position.z))
    var anim = document.createElement('a-animation')
    anim.setAttribute('attribute', 'position')
    anim.setAttribute('dur', '1000')
    anim.setAttribute('fill', 'backwards')
    anim.setAttribute('direction', 'reverse')
    anim.setAttribute('easing', 'linear')
    anim.setAttribute('to', '0 0.05 -0.2')
    shoot.appendChild(anim);
    setTimeout(destr, 1000, pointer);
}
document.querySelector('#scene').addEventListener('click', function () { makeshoot2() });*/