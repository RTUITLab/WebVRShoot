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
contr.addEventListener('triggerdown', function () {
    document.querySelector('#raycaster').setAttribute('raycaster',{objects: '.clickable', showLine: true})
    setTimeout(function(){document.querySelector('#raycaster').setAttribute('raycaster','showLine',false);bun.removeAttribute('raycaster');console.log('wtf')},1)
  });