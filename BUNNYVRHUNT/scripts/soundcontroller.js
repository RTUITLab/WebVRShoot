AFRAME.registerComponent('soundcontroller',{
    schema:{
    massound:{default:0.4},
    msound:{default: 0.4},
    esound:{default: 0.4}
    },
    update: function(){
        wm.setAttribute("volume",this.data.massound*this.data.esound)
        lm.setAttribute("volume",this.data.massound*this.data.esound)
        pm.setAttribute("volume",this.data.massound*this.data.esound)
        gm.setAttribute("volume",this.data.massound*this.data.msound)
        cam.setAttribute("sound","volume",this.data.massound*this.data.msound)
        head.setAttribute("sound","volume",this.data.massound*this.data.esound)
        aim.setAttribute("sound","volume",this.data.massound*this.data.esound)
        musvol.setAttribute('value',this.data.msound)
        masvol.setAttribute('value',this.data.massound)
        effvol.setAttribute('value',this.data.esound)
    }
});