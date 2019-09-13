AFRAME.registerComponent('beast',{
    schema:{
    speed:{type: 'int',default: 30},
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
            scene.removeChild(this.el)
        }
    }
});
function randomwalk(me){
    var targ = nearestcarrot(me)
    if (targ)
    {
    var walkx = targ.object3D.getWorldPosition().x
    var walkz = targ.object3D.getWorldPosition().z
    me.nowspeed=Math.random()*5+(me.data.speed-5);
    me.dirto=Math.atan2(walkz-me.el.object3D.position.z,walkx-me.el.object3D.position.x)*180/3.14*(-1)
    me.el.children[2].setAttribute('rotation', "0 "+(me.dirto-90).toString()+" 0")
    var anim = document.createElement('a-animation')
    anim.setAttribute('name','walker')
    anim.setAttribute('attribute', 'position')
    anim.setAttribute('dur', ((Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2)))/me.nowspeed*10000).toString())
    anim.setAttribute('easing', 'linear')
    anim.setAttribute('to', walkx.toString()+" "+me.el.object3D.position.y.toString()+" "+walkz.toString() )
    me.el.appendChild(anim);
    setTimeout(function(me,targ){
        if (me.data.hp>0)
        if (targ.parentEl)
        setTimeout(function(me,targ){if (me.data.hp>0)
            { 
                if (targ.parentEl)
                {
                targ.parentEl.removeChild(targ);
                var divs = document.querySelectorAll('#carrot'), i;
                if (divs.length==0)
                {
                    gamestate="menu"
                    var divs = document.querySelectorAll('#bunny'), i;
                    for (i = 0; i < divs.length; ++i)
                    scene.removeChild(divs[i])
                    var divs = document.querySelectorAll('#garden'), i;
                    for (i = 0; i < divs.length; ++i)
                    {
                        console.log(divs[i].getAttribute('cholder'))
                    replant(divs[i])
                    }
                    document.querySelector('#playb').setAttribute('visible','true')
                    socument.querySelector('#playb').setAttribute('class','clickable')
                }
                }

                randomwalk(me)
            }
             ;},1000,me,targ)
             else 
             randomwalk(me);} , Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2))/me.nowspeed*10000, me,targ)
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