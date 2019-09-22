AFRAME.registerComponent('soundcontroller',{
    schema:{
    msound:{type:'int',default: 1},
    esound:{type:'int',default: 1}
    },
    update: function(){
        wm.setAttribute("volume",this.data.esound)
        lm.setAttribute("volume",this.data.esound)
        pm.setAttribute("volume",this.data.esound)
        gm.setAttribute("volume",this.data.msound)
        cam.setAttribute("sound","volume",this.data.msound)
        head.setAttribute("sound","volume",this.data.esound)
        aim.setAttribute("sound","volume",this.data.esound)
    }
});