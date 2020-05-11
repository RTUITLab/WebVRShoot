AFRAME.registerComponent('healthbar', {
    tick: function (time, timeDelta) {
      var dir = 90-Math.atan2(Cam.getAttribute('position').z-this.el.parentEl.getAttribute('position').z,Cam.getAttribute('position').x-this.el.parentEl.getAttribute('position').x)*180/Math.PI
    this.el.setAttribute('rotation', "0 "+dir.toString()+" 0")
    }
});