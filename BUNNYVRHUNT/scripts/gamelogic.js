let curs = document.querySelector("#Curs");
var contr = document.querySelector("#controller");
var cam = document.querySelector("#Cam");
var bun = document.querySelector("#bunny");
var head = document.querySelector("#Head");
var shootr = 1;
var gamestate = "menu";
document.querySelector("#playb").addEventListener('collide',function(event){
    gamestate="game"
    document.querySelector("#playb").setAttribute('visible','false')
    document.querySelector("#playb").setAttribute('class','nc')
    setTimeout(function(){spwaner()},1000)
    setTimeout(function(){spwaner()},2000)
    setTimeout(function(){spwaner()},6000)
    setTimeout(function(){spwaner()},7000)
    setTimeout(function(){spwaner()},8000)
    setTimeout(function(){spwaner()},13000)
    setTimeout(function(){spwaner()},14000)
    setTimeout(function(){spwaner()},15000)
})
function spwaner()
{
    if (gamestate=="game")
    {
    var divs = document.querySelectorAll('#hole'), i;
    var rand = Math.floor(Math.random() * divs.length);
    divs[rand].emit("spawnbunny")
    }
}
var divs = document.querySelectorAll('#hole'), i;
    for (i = 0; i < divs.length; ++i)
    {
divs[i].addEventListener('spawnbunny', function (event)
{
    var bunyy = document.createElement('a-entity');
    bunyy.setAttribute('id', "bunny");
    bunyy.setAttribute('beast',"")
    bunyy.setAttribute('scale', "0.5 0.5 0.5");
    bunyy.setAttribute('position', event.currentTarget.getAttribute("position").x.toString()+" 0.25 "+event.currentTarget.getAttribute("position").z.toString());
    var hb = document.createElement('a-entity');
    hb.setAttribute('position','0 1 0')
    hb.setAttribute('healthbar',"")
    var dynamic = document.createElement('a-plane');
    dynamic.setAttribute('scale','1 0.2 1')
    dynamic.setAttribute('color','#550000')
    hb.appendChild(dynamic)
    var dynamic = document.createElement('a-plane');
    dynamic.setAttribute('position','0 0 -0.05')
    dynamic.setAttribute('scale','1.1 0.3 1')
    dynamic.setAttribute('color','#545454')
    hb.appendChild(dynamic)
    bunyy.appendChild(hb)
    var dynamic = document.createElement('a-box');
    dynamic.setAttribute('id','bunnyhitbox')
    dynamic.setAttribute('class','clickable')
    dynamic.setAttribute('scale','2 2 2')
    dynamic.setAttribute('collider-check',"")
    dynamic.setAttribute('visible','false')
    bunyy.appendChild(dynamic)
    var dynamic = document.createElement('a-entity');
    dynamic.setAttribute('id','model')
    dynamic.setAttribute('scale','0.2 0.2 0.2')
    dynamic.setAttribute('rotation','0 180 0')
    dynamic.setAttribute('obj-model',{obj:"#bobj", mtl:"#bmtl"})
    bunyy.appendChild(dynamic)
    scene.appendChild(bunyy)
    bunyy.addEventListener('collide', function (event) {
        var nowhp=this.getAttribute('beast').hp
        this.setAttribute('beast','hp',nowhp-50)
    });
});
    }
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
document.querySelector('#scene').addEventListener('click', function () {
    if (gamestate=="menu")
    {
        document.querySelector('#raycaster').emit("poof")
        document.querySelector('#raycaster').setAttribute('raycaster','enabled',true)
        setTimeout(function(){document.querySelector('#raycaster').setAttribute('raycaster','enabled',false);},50)
    }
    else
    if (shootr)
    {
        document.querySelector('#raycaster').emit("poof")
        shootr=0;
    document.querySelector('#raycaster').setAttribute('raycaster','enabled',true)
    setTimeout(function(){document.querySelector('#raycaster').setAttribute('raycaster','enabled',false);},50)
    setTimeout(function(){shootr=1},1000)
    }
  });
/*contr.addEventListener('triggerdown', function () {
    document.querySelector('#raycaster').setAttribute('raycaster',{objects: '.clickable', showLine: true})
    setTimeout(function(){document.querySelector('#raycaster').setAttribute('raycaster','showLine',false);document.querySelector('#raycaster')..removeAttribute('raycaster');console.log('wtf')},1)
  });*/