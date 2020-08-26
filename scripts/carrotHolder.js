AFRAME.registerComponent('carrot-holder',{
    schema:{
    carrots:{type: 'number',default: 16},
    wh:{type:'number',default: 4},
    hh:{type:'number',default: 4},
    counter:{type:'selector'}
    },
    init: function() {
    replant(this.data,this.el)
    this.el.setAttribute('carrot-holder','counter',this.el.children[0])
    },
    update: function(){
        this.data.counter.setAttribute('value',this.data.carrots)
    }
});
function plantcarrot(a,b,c)
{
    var carrot = document.createElement('a-entity');
    carrot.setAttribute('id', "carrot");
    carrot.setAttribute('position',a.toString() + " 1.5 " + b.toString())
    carrot.setAttribute('scale',"0.25 0.25 0.25")
    carrot.setAttribute('gltf-model',"#Carrot_glb")
    carrot.setAttribute('free','true')
    c.appendChild(carrot)
}
function replant(me,obj)
{
    {
        obj.setAttribute('carrot-holder','carrots',16)
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