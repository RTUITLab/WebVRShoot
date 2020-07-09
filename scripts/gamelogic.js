var Sun = document.querySelector('#Sun')
var Sky_box = document.querySelector('#Sky_box');
var Hemi= document.querySelector('#Hemi')
var Direct = document.querySelector('#Direct')
var Play_b = document.querySelector("#Play_b");
var Text_p = document.querySelector('#Text_plane')
var Easy_b = document.querySelector("#Easy_b")
var Medium_b = document.querySelector("#Medium_b")
var Settings_b = document.querySelector("#Settings_b")
var Hard_b = document.querySelector("#Hard_b")
var Casual_b = document.querySelector("#Casual_b")
var Realistic_b = document.querySelector("#Realistic_b")
var Back_b = document.querySelector("#Back_b")
var Press_mus = document.querySelector('#Press_mus')
var Game_mus = document.querySelector('#Game_mus')
var Win_mus = document.querySelector('#Win_mus')
var Lose_mus = document.querySelector('#Lose_mus')
var Eat_mus = document.querySelector('#Eat_mus')
var Right_hand = document.querySelector('#Right_hand')
var Left_hand = document.querySelector('#Left_hand')
var Master_text = document.querySelector("#Master_text")
var Effect_text = document.querySelector('#Effect_text')
var Music_text = document.querySelector('#Music_text')
var Music_up = document.querySelector('#Music_up')
var Music_down = document.querySelector('#Music_down')
var Music_volume = document.querySelector('#Music_volume')
var Master_up = document.querySelector('#Master_up')
var Master_down = document.querySelector('#Master_down')
var Master_volume = document.querySelector('#Master_volume')
var Effect_up = document.querySelector('#Effect_up')
var Effect_down = document.querySelector('#Effect_down')
var Effect_volume = document.querySelector('#Effect_volume')
var Head = document.querySelector('#Head')
var Cam = document.querySelector('#Cam')
var Scene = document.querySelector('a-scene');
var Cursor = document.querySelector('a-cursor');
var Exit = document.querySelector('#Exit');
var Reset = document.querySelector('#Reset');
var Rifle = document.querySelector('#Rifle_model')

var gameid=0;
var ending=false;
var light =  true;
var gamestate = "Menu";
var difficulty = "Easy";
var shoot_ready=true;

function Open_settings()
{
  Settings_b.setAttribute('visible','false')
  Settings_b.setAttribute('class','notclickable')
  Realistic_b.setAttribute('visible','false')
  Realistic_b.setAttribute('class','notclickable')
  Casual_b.setAttribute('visible','false')
  Casual_b.setAttribute('class','notclickable')
  Hard_b.setAttribute('visible','false')
  Hard_b.setAttribute('class','notclickable')
  Medium_b.setAttribute('visible','false')
  Medium_b.setAttribute('class','notclickable')
  Easy_b.setAttribute('visible','false')
  Easy_b.setAttribute('class','notclickable')
  Play_b.setAttribute('visible','false')
  Play_b.setAttribute('class','notclickable')
  Music_volume.setAttribute('visible','true')
  Music_volume.setAttribute('class','clickable')
  Master_volume.setAttribute('visible','true')
  Master_volume.setAttribute('class','clickable')
  Effect_volume.setAttribute('visible','true')
  Effect_volume.setAttribute('class','clickable')
}

function Close_settings()
{
  Settings_b.setAttribute('visible','true')
  Settings_b.setAttribute('class','clickable')
  Realistic_b.setAttribute('visible','true')
  Realistic_b.setAttribute('class','clickable')
  Casual_b.setAttribute('visible','true')
  Casual_b.setAttribute('class','clickable')
  Hard_b.setAttribute('visible','true')
  Hard_b.setAttribute('class','clickable')
  Medium_b.setAttribute('visible','true')
  Medium_b.setAttribute('class','clickable')
  Easy_b.setAttribute('visible','true')
  Easy_b.setAttribute('class','clickable')
  Play_b.setAttribute('visible','true')
  Play_b.setAttribute('class','clickable')
  Music_volume.setAttribute('visible','false')
  Music_volume.setAttribute('class','notclickable')
  Master_volume.setAttribute('visible','false')
  Master_volume.setAttribute('class','notclickable')
  Effect_volume.setAttribute('visible','false')
  Effect_volume.setAttribute('class','notclickable')
}

function Open_menu() {
    gamestate="menu"
    Text_p.setAttribute('visible','false')
    Text_p.setAttribute('class','nc')
    Settings_b.setAttribute('visible','true')
    Settings_b.setAttribute('class','clickable')
    Realistic_b.setAttribute('visible','true')
    Realistic_b.setAttribute('class','clickable')
    Casual_b.setAttribute('visible','true')
    Casual_b.setAttribute('class','clickable')
    Hard_b.setAttribute('visible','true')
    Hard_b.setAttribute('class','clickable')
    Medium_b.setAttribute('visible','true')
    Medium_b.setAttribute('class','clickable')
    Easy_b.setAttribute('visible','true')
    Easy_b.setAttribute('class','clickable')
    Play_b.setAttribute('visible','true')
   Play_b.setAttribute('class','clickable')
}

Right_hand.setAttribute('windows-motion-controls','model','false')

function spawner(id)
{
     if (gamestate=="game")
    {
    var divs = document.querySelectorAll('#Hole'), i;
    var rand = Math.floor(Math.random() * divs.length);
    divs[rand].emit("spawnbunny",id)
    }
}
var divs = document.querySelectorAll('#Hole'), i;
    for (i = 0; i < divs.length; ++i)
    {
divs[i].addEventListener('spawnbunny', function (event, id)
{
  id=event.detail
    var bunyy = document.createElement('a-entity');
    bunyy.setAttribute('id', "Bunny");
    bunyy.setAttribute('beast','id',id)
    bunyy.setAttribute('scale', "0.5 0.5 0.5");
    bunyy.setAttribute('position', event.currentTarget.getAttribute("position").x.toString()+" 0.25 "+event.currentTarget.getAttribute("position").z.toString());
    var hb = document.createElement('a-entity');
    hb.setAttribute('position','0 1 0')
    if (id==1||id==2)
    {
    bunyy.setAttribute('beast','hp',50)
    hb.setAttribute('visible',"false")
    }
    if (id==2)
    {
      bunyy.setAttribute('beast','speed',60)
    }
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
    if (id==1)
    model.setAttribute('gltf-model',"#Bunny_glb")
    if (id==2)
    model.setAttribute('gltf-model',"#Bunny_fast_glb")
    if (id==3)
    {
    model.setAttribute('gltf-model',"#Bunny_big_glb")
    }
    model.setAttribute('animation-mixer',{clip:"run"});
    bunyy.appendChild(model)
    scene.appendChild(bunyy)
    bunyy.addEventListener('click', function (event) {
      if (shoot_ready==true)
      {
        shoot_ready=false;
        var nowhp=this.getAttribute('beast').hp
        this.setAttribute('beast','hp',nowhp-50)
      }
    });
});
}
function textplane(text)
{
  Game_mus.components.sound.stopSound();
    gamestate="info"
  Text_p.setAttribute('visible','true')
  Text_p.setAttribute('class','clickable')
  Text_p.children[0].setAttribute('value',text)
  var divs = document.querySelectorAll('#Bunny'), i;
  for (i = 0; i < divs.length; ++i)
  divs[i].setAttribute('beast','hp',0)
  var divs = document.querySelectorAll('#carrot'), i;
  for (i = 0; i < divs.length; ++i)
  {
      divs[i].parentEl.removeChild(divs[i])
  }
  var divs = document.querySelectorAll('#Garden'), i;
  for (i = 0; i < divs.length; ++i)
  {
  replant(divs[i].getAttribute('carrot-holder'),divs[i])
  }
}
function startgame()
{
    console.log('called')
Game_mus.emit("Game")
  gamestate="game"
  Settings_b.setAttribute('visible','false')
  Settings_b.setAttribute('class','notclickable')
  Realistic_b.setAttribute('visible','false')
  Realistic_b.setAttribute('class','notclickable')
  Casual_b.setAttribute('visible','false')
  Casual_b.setAttribute('class','notclickable')
  Hard_b.setAttribute('visible','false')
  Hard_b.setAttribute('class','notclickable')
  Medium_b.setAttribute('visible','false')
  Medium_b.setAttribute('class','notclickable')
  Easy_b.setAttribute('visible','false')
  Easy_b.setAttribute('class','notclickable')
  Play_b.setAttribute('visible','false')
  Play_b.setAttribute('class','notclickable')
  if (difficulty=="Easy")
  {
  setTimeout(function(){spawner(1)},1000)
  setTimeout(function(){spawner(2)},2000)
  setTimeout(function(){spawner(1)},6000)
  setTimeout(function(){spawner(3)},7000)
  setTimeout(function(){spawner(1)},8000)
  setTimeout(function(){spawner(3)},13000)
  setTimeout(function(){spawner(3)},14000)
  setTimeout(function(){spawner(1);ending=true;},15000)
  }
  if (difficulty=="Medium")
  {
      setTimeout(function(){spawner(1)},1000)
      setTimeout(function(){spawner(2)},2000)
      setTimeout(function(){spawner(3)},6000)
      setTimeout(function(){spawner(1)},7000)
      setTimeout(function(){spawner(3)},8000)
      setTimeout(function(){spawner(2)},13000)
      setTimeout(function(){spawner(2)},14000)
      setTimeout(function(){spawner(2);ending=true;},15000)
  }
  if (difficulty=="Hard")
  {
      setTimeout(function(){spawner(3)},1000)
      setTimeout(function(){spawner(2)},2000)
      setTimeout(function(){spawner(3)},6000)
      setTimeout(function(){spawner(3)},7000)
      setTimeout(function(){spawner(2)},8000)
      setTimeout(function(){spawner(3)},13000)
      setTimeout(function(){spawner(2)},14000)
      setTimeout(function(){spawner(2);ending=true;},15000)
  }
}

Scene.addEventListener('enter-vr',function(){
  Cursor.setAttribute('raycaster','enabled','false')
  Cursor.setAttribute('visible','false')
  Right_hand.setAttribute('visible','true')
});
Cursor.addEventListener('click',function(){
  if (shoot_ready==true&&gamestate=="game")
  {
  setTimeout(function(){shoot_ready=false},0)
  setTimeout(function(){shoot_ready=true},1000)
  Right_hand.emit("poof")
}})
Right_hand.addEventListener('triggerdown',
function(){
  if (shoot_ready==true&&gamestate=="game")
  {
  setTimeout(function(){shoot_ready=false},150)
  setTimeout(function(){shoot_ready=true},1000)
  Right_hand.emit("poof")
}
  })