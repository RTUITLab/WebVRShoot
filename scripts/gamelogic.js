var contr = document.querySelector("#controller");
var cam = document.querySelector("#Cam");
var head = document.querySelector("#Head");
var play = document.querySelector("#playb");
var sun = document.querySelector('#sun')
var ez = document.querySelector("#easy")
var med = document.querySelector("#medium")
var set = document.querySelector("#settings")
var hard = document.querySelector("#hard")
var cas = document.querySelector("#casual")
var real = document.querySelector("#realistic")
var aim = document.querySelector('#raycaster')
var tp = document.querySelector('#textpl')
var gm = document.querySelector('#gamemusik')
var wm = document.querySelector('#winmusik')
var bk = document.querySelector('#back')
var lm = document.querySelector('#losemusik')
var pm = document.querySelector('#pressmusik')
var hemi= document.querySelector('#hemi')
var dir = document.querySelector('#direct')
var musup = document.querySelector('#musvolumeup')
var musdown = document.querySelector('#musvolumedown')
var musvol = document.querySelector('#musvolume')
var masup = document.querySelector('#masvolumeup')
var masdown = document.querySelector('#masvolumedown')
var masvol = document.querySelector('#masvolume')
var effup = document.querySelector('#effvolumeup')
var effdown = document.querySelector('#effvolumedown')
var effvol = document.querySelector('#effvolume')
var mus = document.querySelector('#MusicVolume')
var mas = document.querySelector('#MasterVolume')
var eff = document.querySelector('#EffectVolume')
var sky = document.querySelector('#mysky');
var light =  true;
var shootr = 1;
var ending=false;
var gamestate = "menu";
var difficulty = "easy";
console.log(hard.object3D.getWorldPosition().x)
effdown.addEventListener('collide',function(event)
{
    if (cam.getAttribute('soundcontroller').esound>0)
    {
    cam.setAttribute('soundcontroller','esound',Math.round((cam.getAttribute('soundcontroller').esound-0.1)*10)/10)
    }
    pm.emit("press")
})
effup.addEventListener('collide',function(event)
{
    if (cam.getAttribute('soundcontroller').esound<1)
    {
    cam.setAttribute('soundcontroller','esound',Math.round((cam.getAttribute('soundcontroller').esound+0.1)*10)/10)
    }
    pm.emit("press")
})
musdown.addEventListener('collide',function(event)
{
    if (cam.getAttribute('soundcontroller').msound>0)
    {
    cam.setAttribute('soundcontroller','msound',Math.round((cam.getAttribute('soundcontroller').msound-0.1)*10)/10)
    }
    pm.emit("press")
})
musup.addEventListener('collide',function(event)
{
    if (cam.getAttribute('soundcontroller').msound<1)
    {
    cam.setAttribute('soundcontroller','msound',Math.round((cam.getAttribute('soundcontroller').msound+0.1)*10)/10)
    }
    pm.emit("press")
})
masdown.addEventListener('collide',function(event)
{
    if (cam.getAttribute('soundcontroller').massound>0)
    {
    cam.setAttribute('soundcontroller','massound',Math.round((cam.getAttribute('soundcontroller').massound-0.1)*10)/10)
    }
    pm.emit("press")
})
masup.addEventListener('collide',function(event)
{
    if (cam.getAttribute('soundcontroller').massound<1)
    {
    cam.setAttribute('soundcontroller','massound',Math.round((cam.getAttribute('soundcontroller').massound+0.1)*10)/10)
    }
    pm.emit("press")
})
tp.addEventListener('collide',function(event)
{
    openmenu()
    pm.emit("press")
})
cas.addEventListener('collide',function(event)
{
    pm.emit("press")
    aim.setAttribute('raycaster','showLine',true)
    cas.children[1].setAttribute('color','white')
    real.children[1].setAttribute('color','black')
})
real.addEventListener('collide',function(event)
{
    pm.emit("press")
    aim.setAttribute('raycaster','showLine',false)
    cas.children[1].setAttribute('color','black')
    real.children[1].setAttribute('color','white')
})
sun.addEventListener('collide', function(event)
{
    if (!light)
    {
        hemi.setAttribute("light","intensity",4)
        direct.setAttribute("light","intensity",2)
        sky.setAttribute("src","models/day_sky.png")
        sun.setAttribute("gltf-model","#sunglb")
        light=!light;
    }
    else
    {
        hemi.setAttribute("light","intensity",2)
        direct.setAttribute("light","intensity",1)
        sky.setAttribute("src","models/night_sky.png")
        sun.setAttribute("gltf-model","#moonglb")
        light=!light;
    }
})
bk.addEventListener('collide',function(event)
{
    closesettings()
    pm.emit("press")
})
set.addEventListener('collide',function(event)
{
    opensettings()
    pm.emit("press")
})
ez.addEventListener('collide',function(event)
{
    pm.emit("press")
    difficulty = "easy"
    ez.children[1].setAttribute('color','white')
    med.children[1].setAttribute('color','black')
    hard.children[1].setAttribute('color','black')
})
med.addEventListener('collide',function(event)
{
    pm.emit("press")
    difficulty = "medium"
    ez.children[1].setAttribute('color','black')
    med.children[1].setAttribute('color','white')
    hard.children[1].setAttribute('color','black')
})
hard.addEventListener('collide',function(event)
{
    pm.emit("press")
    difficulty = "hard"
    ez.children[1].setAttribute('color','black')
    med.children[1].setAttribute('color','black')
    hard.children[1].setAttribute('color','white')
})
play.addEventListener('collide',function(event){
pm.emit("press")
startgame()
})
function spwaner(id)
{
    if (gamestate=="game")
    {
    var divs = document.querySelectorAll('#hole'), i;
    var rand = Math.floor(Math.random() * divs.length);
    if (id==1)
    divs[rand].emit("spawnbunny")
    if (id==2)
    divs[rand].emit("spawnbunny2")
    if (id==3)
    divs[rand].emit("spawnbunny3")
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
    var model = document.createElement('a-entity');
    model.setAttribute('id','model')
    model.setAttribute('scale','0.2 0.2 0.2')
    model.setAttribute('rotation','0 180 0')
    model.setAttribute('gltf-model',"#bunnygltf")
    model.setAttribute('animation-mixer',{clip:"run"});
    bunyy.appendChild(model)
    scene.appendChild(bunyy)
    bunyy.addEventListener('collide', function (event) {
        var nowhp=this.getAttribute('beast').hp
        this.setAttribute('beast','hp',nowhp-50)
    });
});
divs[i].addEventListener('spawnbunny2', function (event)
{
    var bunyy = document.createElement('a-entity');
    bunyy.setAttribute('id', "bunny");
    bunyy.setAttribute('beast',"speed","50")
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
    dynamic.setAttribute('gltf-model',"#bunnygltf")
    bunyy.appendChild(dynamic)
    scene.appendChild(bunyy)
    bunyy.addEventListener('collide', function (event) {
        var nowhp=this.getAttribute('beast').hp
        this.setAttribute('beast','hp',nowhp-50)
    });
});
divs[i].addEventListener('spawnbunny3', function (event)
{
    var bunyy = document.createElement('a-entity');
    bunyy.setAttribute('id', "bunny");
    bunyy.setAttribute('beast',"hp","150")
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
    dynamic.setAttribute('gltf-model',"#bunnygltf")
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
});
contr.addEventListener('controllerconnected', function () {
    head.setAttribute('wasd-controls-enabled', "false")
    contr.setAttribute('visible', 'true')
});
/*document.querySelector('#scene').addEventListener('click', function () {
    if (gamestate=="menu")
    {
    //   aim.emit("poof")
       aim.setAttribute('raycaster','enabled',true)
        setTimeout(function(){aim.setAttribute('raycaster','enabled',false);},50)
    }
    else
    if (shootr)
    {
        aim.emit("poof")
        shootr=0;
    aim.setAttribute('raycaster','enabled',true)
    setTimeout(function(){aim.setAttribute('raycaster','enabled',false);},50)
    setTimeout(function(){shootr=1},1000)
    }
  });*/
contr.addEventListener('triggerdown', function () {
    if (gamestate=="menu")
    {
       aim.emit("poof")
       aim.setAttribute('raycaster','enabled',true)
        setTimeout(function(){aim.setAttribute('raycaster','enabled',false);},50)
    }
    else
    if (shootr)
    {
        aim.emit("poof")
        shootr=0;
    aim.setAttribute('raycaster','enabled',true)
    setTimeout(function(){aim.setAttribute('raycaster','enabled',false);},50)
    setTimeout(function(){shootr=1},1000)
    }
 });
  function textplane(text)
  {
    gm.components.sound.stopSound();
    //  cam.emit("menu")
      gamestate="info"
    tp.setAttribute('visible','true')
    tp.setAttribute('class','clickable')
    tp.children[0].setAttribute('value',text)
    var divs = document.querySelectorAll('#bunny'), i;
    for (i = 0; i < divs.length; ++i)
    divs[i].setAttribute('beast','hp',0)
    var divs = document.querySelectorAll('#carrot'), i;
    for (i = 0; i < divs.length; ++i)
    {
        divs[i].parentEl.removeChild(divs[i])
    }
    var divs = document.querySelectorAll('#garden'), i;
    for (i = 0; i < divs.length; ++i)
    {
    replant(divs[i].getAttribute('cholder'),divs[i])
    }
  }
  function opensettings()
  {
    set.setAttribute('visible','false')
    set.setAttribute('class','nc')
    real.setAttribute('visible','false')
    real.setAttribute('class','nc')
    cas.setAttribute('visible','false')
    cas.setAttribute('class','nc')
    hard.setAttribute('visible','false')
    hard.setAttribute('class','nc')
    med.setAttribute('visible','false')
    med.setAttribute('class','nc')
    ez.setAttribute('visible','false')
    ez.setAttribute('class','nc')
    play.setAttribute('visible','false')
    play.setAttribute('class','nc')
    mus.setAttribute('visible','true')
    mus.setAttribute('class','clickable')
    mas.setAttribute('visible','true')
    mas.setAttribute('class','clickable')
    eff.setAttribute('visible','true')
    eff.setAttribute('class','clickable')
  }
  function closesettings()
  {
    set.setAttribute('visible','true')
    set.setAttribute('class','clickable')
    real.setAttribute('visible','true')
    real.setAttribute('class','clickable')
    cas.setAttribute('visible','true')
    cas.setAttribute('class','clickable')
    hard.setAttribute('visible','true')
    hard.setAttribute('class','clickable')
    med.setAttribute('visible','true')
    med.setAttribute('class','clickable')
    ez.setAttribute('visible','true')
    ez.setAttribute('class','clickable')
    play.setAttribute('visible','true')
    play.setAttribute('class','clickable')
    mus.setAttribute('visible','false')
    mus.setAttribute('class','nc')
    mas.setAttribute('visible','false')
    mas.setAttribute('class','nc')
    eff.setAttribute('visible','false')
    eff.setAttribute('class','nc')
  }
  function startgame()
  {
   gm.emit("game")
    gamestate="game"
    set.setAttribute('visible','false')
    set.setAttribute('class','nc')
    real.setAttribute('visible','false')
    real.setAttribute('class','nc')
    cas.setAttribute('visible','false')
    cas.setAttribute('class','nc')
    hard.setAttribute('visible','false')
    hard.setAttribute('class','nc')
    med.setAttribute('visible','false')
    med.setAttribute('class','nc')
    ez.setAttribute('visible','false')
    ez.setAttribute('class','nc')
    play.setAttribute('visible','false')
    play.setAttribute('class','nc')
    if (difficulty=="easy")
    {
    setTimeout(function(){spwaner(1)},1000)
    setTimeout(function(){spwaner(1)},2000)
    setTimeout(function(){spwaner(1)},6000)
    setTimeout(function(){spwaner(1)},7000)
    setTimeout(function(){spwaner(1)},8000)
    setTimeout(function(){spwaner(1)},13000)
    setTimeout(function(){spwaner(1)},14000)
    setTimeout(function(){spwaner(1);ending=true;},15000)
    }
    if (difficulty=="medium")
    {
        setTimeout(function(){spwaner(1)},1000)
        setTimeout(function(){spwaner(2)},2000)
        setTimeout(function(){spwaner(1)},6000)
        setTimeout(function(){spwaner(1)},7000)
        setTimeout(function(){spwaner(2)},8000)
        setTimeout(function(){spwaner(1)},13000)
        setTimeout(function(){spwaner(2)},14000)
        setTimeout(function(){spwaner(2);ending=true;},15000)
    }
    if (difficulty=="hard")
    {
        setTimeout(function(){spwaner(3)},1000)
        setTimeout(function(){spwaner(2)},2000)
        setTimeout(function(){spwaner(3)},6000)
        setTimeout(function(){spwaner(3)},7000)
        setTimeout(function(){spwaner(2)},8000)
        setTimeout(function(){spwaner(3)},13000)
        setTimeout(function(){spwaner(2)},14000)
        setTimeout(function(){spwaner(2);ending=true;},15000)
    }
  }