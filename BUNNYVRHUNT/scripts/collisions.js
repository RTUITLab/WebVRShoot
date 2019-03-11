AFRAME.registerComponent('collision', {
    tick: function () {
        var divs = document.querySelectorAll('#shooot'), i;
        var decoys = document.querySelectorAll('#bunny'), j;
        for (j = 0; j < decoys.length; j++)
            for (i = 0; i < divs.length; i++) {
                if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().x + 1 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().x - 1) &&
                    (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().y + 1 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().y - 1) &&
                    (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().z + 1 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().z - 1)) {
                    decoys[j].emit('collide')
                }
            }
    }
});