AFRAME.registerComponent('cholder',{
    schema:{
    carrots:{type: 'int',default: 16},
    wh:{type:'int',default: 4},
    hh:{type:'int',default: 4}
    },
    init: function() {
    replant(this.data,this.el)},
    update: function(){
        
    }
});
function plantcarrot(a,b,c)
{
    var carrot = document.createElement('a-entity');
    carrot.setAttribute('id', "carrot");
    carrot.setAttribute('position',a.toString() + " 1.5 " + b.toString())
    carrot.setAttribute('scale',"0.25 0.25 0.25")
    carrot.setAttribute('gltf-model',"#cobj")
    carrot.setAttribute('free','true')
    c.appendChild(carrot)
}
function replant(me,obj)
{
    {
        var planted=0;
        var x=-5;
        var y=-5;
        for (var i=0;i<me.wh;i++)
        {
        for (var j=0;j<me.hh;j++)
        {
        if (planted<=me.carrots)
        {
        plantcarrot(x,y,obj)
        }
        y+=5/(me.hh-1)*2
        }
        x+=5/(me.wh-1)*2
       y=-5
    }
        }
}