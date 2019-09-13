AFRAME.registerComponent('collider-check', {
  
    init: function () {
        this.el.addEventListener('raycaster-intersected', evt => {
            this.raycaster = evt.detail.el;
          });
          this.el.addEventListener('raycaster-intersected-cleared', evt => {
            this.raycaster = null;
          });
    },
    tick: function()
    {
        if (!this.raycaster) { return; } 
        let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
        if (!intersection) { return; }
        if (this.raycaster.getAttribute('raycaster').enabled)
        {
        intersection.object.el.emit("collide")
        document.querySelector('#raycaster').setAttribute('raycaster','enabled',false)
        }
    }
  });
