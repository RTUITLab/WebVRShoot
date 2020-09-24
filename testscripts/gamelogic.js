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
var Real_rifle = document.querySelector('#Real_rifle_model')
var Rifle_text = document.querySelector('#Help_text')
var Right_rifle = document.querySelector('#Right_rifle_model')
var Rifle_text1 = document.querySelector('#Help_text1')
var Rifle_text2 = document.querySelector('#Help_text2')
var light =  true;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var distance = 0;
var shoot_ready=true;
var gamestate = "Menu";
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
  Right_hand.addEventListener('triggerdown',
function(){
    console.log("clicked_trigger")
 // Right_caster.emit("triggerdown")
  Real_caster.emit("triggerdown")
Rifle_text1.setAttribute('value',"")
Rifle_text2.setAttribute('value',"")
  })
  Right_caster.addEventListener('triggerdown',function(){console.log("triggered")})
  Real_caster.addEventListener('triggerdown',function(){console.log("triggered2")})