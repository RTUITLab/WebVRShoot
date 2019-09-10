AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
  
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
        intersection.object.el.setAttribute('material','color','green');
        intersection.object.el.emit("collide")
        console.log(intersection.object.el.id);
        document.querySelector('#raycaster').removeAttribute('raycaster')
        this.raycaster=null;
    }
  });
