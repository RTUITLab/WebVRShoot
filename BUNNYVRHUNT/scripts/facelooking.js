AFRAME.registerComponent('facecam', {
    schema: {
        
    },

    init: function () {
        console.log(this);
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      hd=document.querySelector('#Head')
      var dir = 90-Math.atan2(hd.getAttribute('position').z-this.el.parentEl.getAttribute('position').z,hd.getAttribute('position').x-this.el.parentEl.getAttribute('position').x)*180/Math.PI
    //  Math.atan2(this.el)
    console.log(dir)
    this.el.setAttribute('rotation', "0 "+dir.toString()+" 0")
    }
});
