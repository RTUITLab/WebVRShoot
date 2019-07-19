AFRAME.registerComponent('raygun', {
    schema: {
        targetlist:{type:Array}
    },

    init: function () {
        console.log("inited");
        var untouched=true;
        var i= 0;
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      while(this.untouched||this.i<500)
      {
  /*      for (index = 0; index < this.data.targetlist.length; ++index) {
            console.log(i);
            i++;
            console.log("1");
        }
        */
      }
    }
});
