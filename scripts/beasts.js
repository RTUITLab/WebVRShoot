AFRAME.registerComponent('beast',{
    schema:{
    speed:{type: 'int',default: 40},
    hp: {type:'int',default: 100},
    id:{type:'int', default:1},
    target:{type:'selector'}
    },
    init: function() {
       randomwalk(this);
    },
    update: function(){
        if (this.el.children[0].children[0]) // Если есть полоска хп устанавливает ей размер и цвет в зависимости от хп
        {
       this.el.children[0].children[0].setAttribute('scale',{x:this.data.hp/100, y:0.2, z:1})
       this.el.children[0].children[0].setAttribute('color',getColorForPercentage(this.data.hp/100))
        }
        if (this.el.children[0].children[1]) // Если есть бортик полоски подгоняет его под хп бар 
        {
       this.el.children[0].children[1].setAttribute('scale',{x:this.data.hp/100+0.1, y:0.3, z:1})
        }
        if (this.data.hp<=0) //Если закончились жизни вызывает функцию deathanim, удаляет животное и проверяет не закончились ли зайцы
        {
            if (this.data.target)
            {
            this.data.target.setAttribute('free','true')
            }
            deathanim(this.el,this.el.getAttribute('beast').id)
            scene.removeChild(this.el)
            var divs = document.querySelectorAll('#Bunny'), i;
            if (divs.length==0&&ending)
            {
                var divs = document.querySelectorAll('#carrot'), i;
                if (divs.length>0)
                Win_mus.emit("Win")
                else
                Lose_mus.emit("Lose")
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
    var targ = nearestcarrot(me) //вызываем функцию nearestcarrot, которая возвращает ближайшую свободную морковку 
    if (targ) //если такая есть 
    {
    targ.setAttribute('free','false') //делаем её занятой и добавляем анимацию движения к ней
    me.el.setAttribute('beast','target',targ)
    var walkx = targ.object3D.getWorldPosition().x 
    var walkz = targ.object3D.getWorldPosition().z
    var nowspeed=Math.random()*5+(me.data.speed-5);
    var dirto=Math.atan2(walkz-me.el.object3D.position.z,walkx-me.el.object3D.position.x)*180/3.14*(-1)
    me.el.children[2].setAttribute('rotation', "0 "+(dirto-90).toString()+" 0")
    me.el.removeAttribute('a-animation')
    var anim = document.createElement('a-animation')
    anim.setAttribute('name','walker')
    anim.setAttribute('attribute', 'position')
    anim.setAttribute('dur', ((Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2)))/nowspeed*10000).toString())
    anim.setAttribute('easing', 'linear')
    anim.setAttribute('to', (walkx+Math.sin((dirto-90)/180*3.14)*0.6).toString()+" "+me.el.object3D.position.y.toString()+" "+(walkz+Math.cos((dirto-90)/180*3.14)*0.6).toString() )
    me.el.appendChild(anim);
    setTimeout(function(me,targ){sitdown(me,targ)}, Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2))/nowspeed*10000, me,targ)}
};
function sitdown(me,targ)
{
    me.el.children[2].setAttribute('animation-mixer',{clip:"gather_start",loop:"once"})
    setTimeout(function(me,targ){
        me.el.children[2].setAttribute('animation-mixer',{clip:"gather_loop",loop:"repeat"})
        getcarrot(me,targ)},1000,me,targ)
}
function standup(me)
{
    me.el.children[2].setAttribute('animation-mixer',{clip:"gather_end",loop:"once"})
    setTimeout(function(me){
        me.el.children[2].setAttribute('animation-mixer',{clip:"run",loop:"repeat"})
        randomwalk(me)},1000,me)
}
function nearestcarrot(me)
{
    var nearest = null
    var mindist = 99999
    var dist
    var divs = document.querySelectorAll('#carrot'), i;
    var dv = document.querySelectorAll('#Bunny');
    for (i = 0; i < divs.length; ++i) {
        if (divs[i].getAttribute('free')=='true'|| divs.length <= dv.length )
        {
        dist = Math.sqrt(Math.pow(me.el.object3D.getWorldPosition().x-divs[i].object3D.getWorldPosition().x,2)+Math.pow(me.el.object3D.getWorldPosition().z-divs[i].object3D.getWorldPosition().z,2))
        if (dist<mindist)
        {
            mindist=dist
            nearest = divs[i]
        }
    }
    }
    return nearest
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

    function getcarrot(me,targ){
        if (me.data.hp>0)
                { 
                    if (targ.parentEl)
                    {
                        if (targ.getAttribute('position').y<=2)
                        {
                        targ.setAttribute('position',targ.getAttribute('position').x.toString()+" "+(targ.getAttribute('position').y+0.025).toString()+" "+targ.getAttribute('position').z.toString())
                        Eat_mus.emit('Eat')
                        setTimeout(function(me,targ){getcarrot(me,targ)},10,me,targ)
                        }
                        else
                        {
                        targ.parentEl.setAttribute('carrot-holder',{carrots: targ.parentEl.getAttribute('carrot-holder').carrots-1})
                        targ.parentEl.removeChild(targ);
                        var divs = document.querySelectorAll('#carrot'), i;
                        if (divs.length==0)
                        {
                            Lose_mus.emit("lose")
                            textplane("All the carrots\n were eaten")
                        }
                        standup(me);
                        }
                    }
                    else 
                    standup(me);
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
    if (id==1)
    dynamic.setAttribute('gltf-model','#Bunny_glb')
    if (id==2)
    dynamic.setAttribute('gltf-model','#Bunny_fast_glb')
    if (id==3)
    dynamic.setAttribute('gltf-model','#Bunny_big_glb')
    bunyy.appendChild(dynamic)
    bunyy.setAttribute('animation-mixer',{clip:'death_start',loop:'once',clampWhenFinished:'true'})
    dynamic = document.createElement('a-animation')
    dynamic.setAttribute('attribute', 'position')
    dynamic.setAttribute('dur', '2000')
    dynamic.setAttribute('easing', 'linear')
    dynamic.setAttribute('to', '0 -3 0')
    dynamic.setAttribute('delay','1000')
    bunyy.children[0].appendChild(dynamic)
    scene.appendChild(bunyy)
    setTimeout(function(me){scene.removeChild(me)},3000,bunyy)
}  