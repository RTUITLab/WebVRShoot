AFRAME.registerComponent('beast',{
    schema:{
    speed:{type: 'int',default: 40},
    zone:{type:'int', default: 4},
    hp: {type:'int',default: 100}
    },
    init: function() {
    this.state="walking";
       this.minX=this.el.object3D.position.x-this.data.zone/2;
       this.maxX=this.el.object3D.position.x+this.data.zone/2;
       this.minZ=this.el.object3D.position.z-this.data.zone/2;
       this.maxZ=this.el.object3D.position.z+this.data.zone/2;
       randomwalk(this);
     //  trace(this);
    },
    update: function(){
        if (this.el.children[0].children[0])
        {
       this.el.children[0].children[0].setAttribute('scale',{x:this.data.hp/100, y:0.2, z:1})
       this.el.children[0].children[0].setAttribute('color',getColorForPercentage(this.data.hp/100))
        }
        if (this.el.children[0].children[1])
        {
       this.el.children[0].children[1].setAttribute('scale',{x:this.data.hp/100+0.1, y:0.3, z:1})
        }
        if (this.data.hp<=0)
        {
            deathanim(this.el,"b")
            scene.removeChild(this.el)
            var divs = document.querySelectorAll('#bunny'), i;
            if (divs.length==0&&ending)
            {
                var divs = document.querySelectorAll('#carrot'), i;
                if (divs.length>0)
                wm.emit("win")
                else
                lm.emit("lose")
                if (divs.length>1)
               textplane("Well done!!!\n You saved\n "+ divs.length+" carrots.")
               if (divs.length==1)
               textplane("Well done!!!\n You saved\n "+ divs.length+" carrot.")
               if (divs.length==0)
               textplane("You lost!\nAll the carrots\n were eaten.")
               ending=false;
            }
        }
    },
});
function randomwalk(me){
    var targ = nearestcarrot(me)
    if (targ)
    {
    var walkx = targ.object3D.getWorldPosition().x
    var walkz = targ.object3D.getWorldPosition().z
    var nowspeed=Math.random()*5+(me.data.speed-5);
    var dirto=Math.atan2(walkz-me.el.object3D.position.z,walkx-me.el.object3D.position.x)*180/3.14*(-1)
    me.el.children[2].setAttribute('rotation', "0 "+(dirto-90).toString()+" 0")
    var anim = document.createElement('a-animation')
    anim.setAttribute('name','walker')
    anim.setAttribute('attribute', 'position')
    anim.setAttribute('dur', ((Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2)))/nowspeed*10000).toString())
    anim.setAttribute('easing', 'linear')
    anim.setAttribute('to', (walkx+Math.sin((dirto-90)/180*3.14)*0.6).toString()+" "+me.el.object3D.position.y.toString()+" "+(walkz+Math.cos((dirto-90)/180*3.14)*0.6).toString() )
    me.el.appendChild(anim);
    setTimeout(function(me,targ){
      {getcarrot(me,targ)}
    } , Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2))/nowspeed*10000, me,targ)
        }
};
function nearestcarrot(me)
{
    var nearest = null
    var mindist = 99999
    var dist
    var divs = document.querySelectorAll('#carrot'), i;
    for (i = 0; i < divs.length; ++i) {
        dist = Math.sqrt(Math.pow(me.el.object3D.getWorldPosition().x-divs[i].object3D.getWorldPosition().x,2)+Math.pow(me.el.object3D.getWorldPosition().z-divs[i].object3D.getWorldPosition().z,2))
        if (dist<mindist)
        {
            mindist=dist
            nearest = divs[i]
        }
    }
    return nearest
}
function trace(me){
    var otrace = document.createElement('a-plane');
    otrace.setAttribute('scale', "0.1 0.1 0.1");
    otrace.setAttribute('position', me.el.object3D.position.x.toString()+" "+0.01+" "+me.el.object3D.position.z.toString())
    otrace.setAttribute('rotation',"-90 "+(me.el.children[0].object3D.rotation.y*180/3.14).toString()+" 0")
    me.el.sceneEl.appendChild(otrace);
    setTimeout(trace,me.nowspeed*10,me)
}
var percentColors = [
    { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
    { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
    { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

var getColorForPercentage = function(pct) {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
}
function openmenu() {
    gamestate="menu"
    tp.setAttribute('visible','false')
    tp.setAttribute('class','nc')
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
}
function getcarrot(me,targ){
    if (me.data.hp>0)
            { 
                if (targ.parentEl)
                {
                    if (targ.getAttribute('position').y<=2)
                    {
                    targ.setAttribute('position',targ.getAttribute('position').x.toString()+" "+(targ.getAttribute('position').y+0.025).toString()+" "+targ.getAttribute('position').z.toString())
                    head.emit('eat')
                    setTimeout(function(me,targ){getcarrot(me,targ)},10,me,targ)
                    }
                    else
                    {
                    targ.parentEl.removeChild(targ);
                    var divs = document.querySelectorAll('#carrot'), i;
                    if (divs.length==0)
                    {
                        lm.emit("lose")
                        textplane("All the carrots\n were eaten")
                    }
                    randomwalk(me);
                    }
                }
                else 
                randomwalk(me);
            }
}
function deathanim(me,id)
{
    var bunyy = document.createElement('a-entity');
    bunyy.setAttribute('scale', "0.5 0.5 0.5");
    bunyy.setAttribute('position', me.getAttribute("position").x.toString()+" 0.25 "+me.getAttribute("position").z.toString());
    var dynamic = document.createElement('a-entity');
    dynamic.setAttribute('id','model')
    dynamic.setAttribute('scale','0.2 0.2 0.2')
    dynamic.setAttribute('rotation','0 180 0')
    dynamic.setAttribute('obj-model',{obj:"#"+id+"obj", mtl:"#"+id+"mtl"})
    bunyy.appendChild(dynamic)
    dynamic = document.createElement('a-animation')
    dynamic.setAttribute('attribute', 'rotation')
    dynamic.setAttribute('dur', '1000')
    dynamic.setAttribute('easing', 'linear')
    dynamic.setAttribute('to', '0 0 90')
    bunyy.appendChild(dynamic)
    dynamic = document.createElement('a-animation')
    dynamic.setAttribute('attribute', 'position')
    dynamic.setAttribute('dur', '2000')
    dynamic.setAttribute('easing', 'linear')
    dynamic.setAttribute('to', '-3 0 0')
    dynamic.setAttribute('delay','1000')
    bunyy.children[0].appendChild(dynamic)
    scene.appendChild(bunyy)
    setTimeout(function(me){scene.removeChild(me)},3000,bunyy)
}