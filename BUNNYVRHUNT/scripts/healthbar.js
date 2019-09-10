AFRAME.registerComponent('healthbar', {
  dependencies: ['beast'],
    tick: function (time, timeDelta) {
      hd=document.querySelector('#Head')
      var dir = 90-Math.atan2(hd.getAttribute('position').z-this.el.parentEl.getAttribute('position').z,hd.getAttribute('position').x-this.el.parentEl.getAttribute('position').x)*180/Math.PI
    this.el.setAttribute('rotation', "0 "+dir.toString()+" 0")
    }
});
