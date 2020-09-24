var Sun = document.querySelector('#Sun')
var Moon = document.querySelector('#Moon')
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
var Play_c = document.querySelector("#Play_click");
var Text_c = document.querySelector('#Text_click')
var Easy_c = document.querySelector("#Easy_click")
var Medium_c = document.querySelector("#Medium_click")
var Settings_c = document.querySelector("#Settings_click")
var Hard_c = document.querySelector("#Hard_click")
var Casual_c = document.querySelector("#Casual_click")
var Realistic_c = document.querySelector("#Realistic_click")
var Back_c = document.querySelector("#Back_click")
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
var Music_up_c = document.querySelector('#Music_up_click')
var Music_down_c = document.querySelector('#Music_down_click')
var Master_up_c = document.querySelector('#Master_up_click')
var Master_down_c = document.querySelector('#Master_down_click')
var Effect_up_c = document.querySelector('#Effect_up_click')
var Effect_down_c = document.querySelector('#Effect_down_click')
var Head = document.querySelector('#Head')
var Cam = document.querySelector('#Cam')
var Scene = document.querySelector('a-scene');
var Cursor = document.querySelector('a-cursor');
var Reset = document.querySelector('#Reset');
var Rifle = document.querySelector('#Rifle_model')
var Real_rifle = document.querySelector('#Real_rifle_model')
var Rifle_text1 = document.querySelector('#Help_text1')
var Rifle_text2 = document.querySelector('#Help_text2')
var Right_rifle = document.querySelector('#Right_rifle_model')
var Rifle_hands = document.querySelector('#Rifle_hands')
var Right_caster = document.querySelector('#Right_caster')
var Real_caster = document.querySelector('#Real_caster')

var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var distance = 0;
var gameid=0;
var ending=false;
var light =  true;
var gamestate = "Menu";
var difficulty = "Easy";
var shoot_ready=true;

function Open_settings()
{
  Settings_b.setAttribute('visible','false')
  Settings_c.setAttribute('class','notclickable')
  Realistic_b.setAttribute('visible','false')
  Realistic_c.setAttribute('class','notclickable')
  Casual_b.setAttribute('visible','false')
  Casual_c.setAttribute('class','notclickable')
  Hard_b.setAttribute('visible','false')
  Hard_c.setAttribute('class','notclickable')
  Medium_b.setAttribute('visible','false')
  Medium_c.setAttribute('class','notclickable')
  Easy_b.setAttribute('visible','false')
  Easy_c.setAttribute('class','notclickable')
  Play_b.setAttribute('visible','false')
  Play_c.setAttribute('class','notclickable')
  Music_volume.setAttribute('visible','true')
  Music_up_c.setAttribute('class','clickable')
  Music_down_c.setAttribute('class','clickable')
  Master_volume.setAttribute('visible','true')
  Master_up_c.setAttribute('class','clickable')
  Master_down_c.setAttribute('class','clickable')
  Effect_volume.setAttribute('visible','true')
  Effect_up_c.setAttribute('class','clickable')
  Effect_down_c.setAttribute('class','clickable')
  Back_c.setAttribute('class','clickable')
}

function Close_settings()
{
  Settings_b.setAttribute('visible','true')
  Settings_c.setAttribute('class','clickable')
  Realistic_b.setAttribute('visible','true')
  Realistic_c.setAttribute('class','clickable')
  Casual_b.setAttribute('visible','true')
  Casual_c.setAttribute('class','clickable')
  Hard_b.setAttribute('visible','true')
  Hard_c.setAttribute('class','clickable')
  Medium_b.setAttribute('visible','true')
  Medium_c.setAttribute('class','clickable')
  Easy_b.setAttribute('visible','true')
  Easy_c.setAttribute('class','clickable')
  Play_b.setAttribute('visible','true')
  Play_c.setAttribute('class','clickable')
  Music_volume.setAttribute('visible','false')
  Music_up_c.setAttribute('class','notclickable')
  Music_down_c.setAttribute('class','notclickable')
  Master_volume.setAttribute('visible','false')
  Master_up_c.setAttribute('class','notclickable')
  Master_down_c.setAttribute('class','notclickable')
  Effect_volume.setAttribute('visible','false')
  Effect_up_c.setAttribute('class','notclickable')
  Effect_down_c.setAttribute('class','notclickable')
  Back_c.setAttribute('class','notclickable')
}

function Open_menu() {
    gamestate="menu"
    Text_p.setAttribute('visible','false')
    Text_c.setAttribute('class','nc')
    Settings_b.setAttribute('visible','true')
    Settings_c.setAttribute('class','clickable')
    Realistic_b.setAttribute('visible','true')
    Realistic_c.setAttribute('class','clickable')
    Casual_b.setAttribute('visible','true')
    Casual_c.setAttribute('class','clickable')
    Hard_b.setAttribute('visible','true')
    Hard_c.setAttribute('class','clickable')
    Medium_b.setAttribute('visible','true')
    Medium_c.setAttribute('class','clickable')
    Easy_b.setAttribute('visible','true')
    Easy_c.setAttribute('class','clickable')
    Play_b.setAttribute('visible','true')
   Play_c.setAttribute('class','clickable')
}

Right_hand.setAttribute('windows-motion-controls','model','false')
Left_hand.setAttribute('windows-motion-controls','model','false')

function spawner(id, nowid)
{
     if (gamestate=="game"&&gameid==nowid)
    {
      console.error(nowid)
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
    bunyy.addEventListener('mousedown', function (event) {
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
  ending=false;
  gameid = gameid + 1;
  Game_mus.components.sound.stopSound();
  Text_p.setAttribute('visible','true')
  Text_c.setAttribute('class','clickable')
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
  gamestate="info"
}
function startgame()
{
    console.log('called')
Game_mus.emit("Game")
  gamestate="game"
  var nowid=0
  nowid = gameid
  Settings_b.setAttribute('visible','false')
  Settings_c.setAttribute('class','notclickable')
  Realistic_b.setAttribute('visible','false')
  Realistic_c.setAttribute('class','notclickable')
  Casual_b.setAttribute('visible','false')
  Casual_c.setAttribute('class','notclickable')
  Hard_b.setAttribute('visible','false')
  Hard_c.setAttribute('class','notclickable')
  Medium_b.setAttribute('visible','false')
  Medium_c.setAttribute('class','notclickable')
  Easy_b.setAttribute('visible','false')
  Easy_c.setAttribute('class','notclickable')
  Play_b.setAttribute('visible','false')
  Play_c.setAttribute('class','notclickable')
  if (difficulty=="Easy")
  {
  setTimeout(function(){spawner(1,nowid)},1000)
  setTimeout(function(){spawner(2,nowid)},2000)
  setTimeout(function(){spawner(1,nowid)},6000)
  setTimeout(function(){spawner(3,nowid)},7000)
  setTimeout(function(){spawner(1,nowid)},8000)
  setTimeout(function(){spawner(3,nowid)},13000)
  setTimeout(function(){spawner(3,nowid)},14000)
  setTimeout(function(){spawner(1,nowid)},21000)
  setTimeout(function(){spawner(2,nowid)},22000)
  setTimeout(function(){spawner(1,nowid)},26000)
  setTimeout(function(){spawner(3,nowid)},27000)
  setTimeout(function(){spawner(1,nowid)},28000)
  setTimeout(function(){spawner(3,nowid)},33000)
  setTimeout(function(){spawner(3,nowid)},34000)
  setTimeout(function(){spawner(1,nowid)},41000)
  setTimeout(function(){spawner(2,nowid)},42000)
  setTimeout(function(){spawner(1,nowid)},46000)
  setTimeout(function(){spawner(3,nowid)},47000)
  setTimeout(function(){spawner(1,nowid)},48000)
  setTimeout(function(){spawner(3,nowid)},53000)
  setTimeout(function(){spawner(3,nowid)},54000)
  setTimeout(function(){spawner(1,nowid);ending(nowid)},60000)
  }
  if (difficulty=="Medium")
  {
      setTimeout(function(){spawner(1,nowid)},1000)
      setTimeout(function(){spawner(2,nowid)},2000)
      setTimeout(function(){spawner(3,nowid)},6000)
      setTimeout(function(){spawner(1,nowid)},7000)
      setTimeout(function(){spawner(3,nowid)},8000)
      setTimeout(function(){spawner(2,nowid)},13000)
      setTimeout(function(){spawner(2,nowid)},14000)
      setTimeout(function(){spawner(1,nowid)},21000)
      setTimeout(function(){spawner(2,nowid)},22000)
      setTimeout(function(){spawner(3,nowid)},26000)
      setTimeout(function(){spawner(1,nowid)},27000)
      setTimeout(function(){spawner(3,nowid)},28000)
      setTimeout(function(){spawner(2,nowid)},33000)
      setTimeout(function(){spawner(2,nowid)},34000)
      setTimeout(function(){spawner(1,nowid)},41000)
      setTimeout(function(){spawner(2,nowid)},42000)
      setTimeout(function(){spawner(3,nowid)},46000)
      setTimeout(function(){spawner(1,nowid)},47000)
      setTimeout(function(){spawner(3,nowid)},48000)
      setTimeout(function(){spawner(2,nowid)},53000)
      setTimeout(function(){spawner(2,nowid)},54000)
      setTimeout(function(){spawner(2,nowid);ending(nowid)},60000)
  }
  if (difficulty=="Hard")
  {
      setTimeout(function(){spawner(3,nowid)},1000)
      setTimeout(function(){spawner(2,nowid)},2000)
      setTimeout(function(){spawner(3,nowid)},6000)
      setTimeout(function(){spawner(3,nowid)},7000)
      setTimeout(function(){spawner(2,nowid)},8000)
      setTimeout(function(){spawner(3,nowid)},13000)
      setTimeout(function(){spawner(2,nowid)},14000)
      setTimeout(function(){spawner(3,nowid)},21000)
      setTimeout(function(){spawner(2,nowid)},22000)
      setTimeout(function(){spawner(3,nowid)},26000)
      setTimeout(function(){spawner(3,nowid)},27000)
      setTimeout(function(){spawner(2,nowid)},28000)
      setTimeout(function(){spawner(3,nowid)},33000)
      setTimeout(function(){spawner(2,nowid)},34000)
      setTimeout(function(){spawner(3,nowid)},41000)
      setTimeout(function(){spawner(2,nowid)},42000)
      setTimeout(function(){spawner(3,nowid)},46000)
      setTimeout(function(){spawner(3,nowid)},47000)
      setTimeout(function(){spawner(2,nowid)},48000)
      setTimeout(function(){spawner(3,nowid)},53000)
      setTimeout(function(){spawner(2,nowid)},54000)
      setTimeout(function(){spawner(2,nowid);ending(nowid)},60000)
  }
}
function ending(nowid){if(nowid==gameid){ending=true;}}
Scene.addEventListener('enter-vr',function(){
  Cursor.setAttribute('raycaster','enabled','false')
  Cursor.setAttribute('visible','false')
  Rifle.setAttribute('visible','true')
  Right_hand.setAttribute('visible','true')
  Left_hand.setAttribute('visible','true')
  Rifle_hands.setAttribute('visible','false')
});
Scene.addEventListener('exit-vr',function(){
  Cursor.setAttribute('raycaster','enabled','true')
  Cursor.setAttribute('visible','true')
 Rifle.setAttribute('visible','false')
  Right_hand.setAttribute('visible','false')
  Left_hand.setAttribute('visible','false')
  Rifle_hands.setAttribute('visible','true')
});
Cursor.addEventListener('mousedown',function(){
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
}
Right_hand.emit("poof")
  Real_caster.emit("triggerdown")
Rifle_text1.setAttribute('value',"")
Rifle_text2.setAttribute('value',"")
  })
  Open_settings()
Hemi.setAttribute("light","intensity",1.3)
Direct.setAttribute("light","intensity",0.1)
Sky_box.setAttribute("src","models/Night_sky.png")
Sun.setAttribute("visible","false")
Moon.setAttribute("visible","true")
setTimeout(function(){Hemi.setAttribute("light","intensity",2)
Direct.setAttribute("light","intensity",0.17)
Sky_box.setAttribute("src","models/Day_sky.png")
Sun.setAttribute("visible","true")
Moon.setAttribute("visible","false")
Close_settings()},3000)