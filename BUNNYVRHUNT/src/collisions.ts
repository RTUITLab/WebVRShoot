import * as AFRAME from 'aframe';
export class Collision {
    public static RegisterCollision() {
        AFRAME.registerComponent('collision', {
            tick: () => {
                var divs = document.querySelectorAll('#shooot');
                var decoys = document.querySelectorAll('#bunny');
                for (let j = 0; j < decoys.length; j++)
                    for (let i = 0; i < divs.length; i++) {
                        const l = divs[i] as AFRAME.Entity;
                        l.object3D.getWorldPosition
                        if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().x + 1 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().x - 1) &&
                            (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().y + 1 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().y - 1) &&
                            (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().z + 1 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().z - 1)) {
                            decoys[j].emit('collide')
                        }
                    }
            }
        });
    }
}
