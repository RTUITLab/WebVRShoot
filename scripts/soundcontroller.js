AFRAME.registerComponent('sound-controller',{
    schema:{
    massound:{default:0.5},
    msound:{default: 0.5},
    esound:{default: 0.5}
    },
    update: function(){
        Win_mus.setAttribute("volume",this.data.massound*this.data.esound)
        Lose_mus.setAttribute("volume",this.data.massound*this.data.esound)
        Press_mus.setAttribute("volume",this.data.massound*this.data.esound)
        Game_mus.setAttribute("volume",this.data.massound*this.data.msound)
        Head.setAttribute("sound","volume",this.data.massound*this.data.msound)
        Right_hand.setAttribute("sound","volume",this.data.massound*this.data.esound)
        Music_text.setAttribute('value',this.data.msound)
        Master_text.setAttribute('value',this.data.massound)
        Effect_text.setAttribute('value',this.data.esound)
        console.log('updated')
    }
});