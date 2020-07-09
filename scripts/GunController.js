AFRAME.registerComponent('guncontroller', {
    init: function() {
        console.warn("started")
        },
    tick: function (time, timeDelta) {
     if (Right_hand.getAttribute('position')&&Left_hand.getAttribute('position')&&Rifle)
     {
         console.warn(Math.sqrt(( (Left_hand.getAttribute('position').x-Right_hand.getAttribute('position').x)*(Left_hand.getAttribute('position').x-Right_hand.getAttribute('position').x))+(( Left_hand.getAttribute('position').y-Right_hand.getAttribute('position').y)*( Left_hand.getAttribute('position').y-Right_hand.getAttribute('position').y))+(( Left_hand.getAttribute('position').z-Right_hand.getAttribute('position').z)*( Left_hand.getAttribute('position').z-Right_hand.getAttribute('position').z))))
         console.warn(Math.atan2(Left_hand.getAttribute('position').x-Right_hand.getAttribute('position').x,Left_hand.getAttribute('position').z-Right_hand.getAttribute('position').z)/Math.PI*180)
         console.warn(Math.atan2(Left_hand.getAttribute('position').x-Right_hand.getAttribute('position').x,Left_hand.getAttribute('position').y-Right_hand.getAttribute('position').y)/Math.PI*180)
         Rifle.setAttribute('position',{x:Right_hand.getAttribute('position').x,y:Right_hand.getAttribute('position').y,z:Right_hand.getAttribute('position').z})
         Rifle.setAttribute('rotation',{x:Math.atan2(Right_hand.getAttribute('position').y-Left_hand.getAttribute('position').y,Right_hand.getAttribute('position').z-Left_hand.getAttribute('position').z)/Math.PI*180 ,y:Math.atan2(Right_hand.getAttribute('position').x-Left_hand.getAttribute('position').x,Right_hand.getAttribute('position').z-Left_hand.getAttribute('position').z)/Math.PI*180 ,z:0})
    }
    }
});
