AFRAME.registerComponent('cholder',{
    schema:{
    carrots:{type: 'int',default: 9},
    wh:{type:'int',default: 3},
    hh:{type:'int',default: 3}
    },
    init: function() {
    replant(this)},
    update: function(){
        
    }
});
function plantcarrot(a,b,c)
{
    var carrot = document.createElement('a-entity');
    carrot.setAttribute('id', "carrot");
    carrot.setAttribute('position',a.toString() + " 0 " + b.toString())
    carrot.setAttribute('scale',"0.25 0.25 0.25")
    carrot.setAttribute('obj-model',{obj:"#cobj", mtl:"#cmtl"})
    c.el.appendChild(carrot)
}
function replant(me)
{
    {
        var planted=0;
        var x=-5;
        var y=-5;
        for (var i=0;i<me.data.wh;i++)
        {
        for (var j=0;j<me.data.hh;j++)
        {
        if (planted<=me.data.carrots)
        {
        plantcarrot(x,y,me)
        }
        y+=5/(me.data.hh-1)*2
        }
        x+=5/(me.data.wh-1)*2
       y=-5
    }
        }
}