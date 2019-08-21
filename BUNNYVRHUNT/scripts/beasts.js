AFRAME.registerComponent('beast',{
    shema:{
    speed:{type: 'int',default: 20},
    zone:{type:'int', default: 4},
    hp:{type:'int',default: 100}
    },
    init: function() {
    this.state="walking";
       this.minX=this.el.object3D.position.x-this.data.zone/2;
       this.maxX=this.el.object3D.position.x+this.data.zone/2;
       this.minZ=this.el.object3D.position.z-this.data.zone/2;
       this.maxZ=this.el.object3D.position.z+this.data.zone/2;
     //  randomwalk(this);
       trace(this);
    },
    tick: function () {
        this.el.setAttribute('beast','hp',50)
        //console.log(this.hp)
    }
});
function randomwalk(me){
    let walkx=Math.random()*(me.maxX-me.minX)+me.minX;
    let walkz=Math.random()*(me.maxZ-me.minZ)+me.minZ;
    me.nowspeed=Math.random()*5+(me.data.speed-5);
    me.dirto=Math.atan2(walkz-me.el.object3D.position.z,walkx-me.el.object3D.position.x)*180/3.14*(-1)
    me.el.children[1].setAttribute('rotation', "0 "+me.dirto.toString()+" 0")
    var anim = document.createElement('a-animation')
    anim.setAttribute('name','walker')
    anim.setAttribute('attribute', 'position')
    anim.setAttribute('dur', ((Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.z,2)))/me.nowspeed*10000).toString())
    anim.setAttribute('easing', 'linear')
    anim.setAttribute('to', walkx.toString()+" "+me.el.object3D.position.y.toString()+" "+walkz.toString() )
    me.el.appendChild(anim);
    setTimeout(randomwalk,((Math.sqrt(Math.pow(walkx-me.el.object3D.position.x,2)+Math.pow(walkz-me.el.object3D.position.y,2)))/me.data.speed*10000)+Math.random()*2000, me);
};
function trace(me){
    var otrace = document.createElement('a-plane');
    otrace.setAttribute('scale', "0.1 0.1 0.1");
    otrace.setAttribute('position', me.el.object3D.position.x.toString()+" "+0.01+" "+me.el.object3D.position.z.toString())
    otrace.setAttribute('rotation',"-90 "+(me.el.children[0].object3D.rotation.y*180/3.14).toString()+" 0")
    me.el.sceneEl.appendChild(otrace);
    setTimeout(trace,me.nowspeed*10,me)
}