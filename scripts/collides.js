AFRAME.registerComponent('collision', {
  tick: function () {
    var divs = document.querySelectorAll('#shooot'), i;
    var decoys = document.querySelectorAll('#target'), j;
    for (j = 0; j < decoys.length; ++j)
    for (i = 0; i < divs.length; ++i) {
      if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().x + 0.5 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().x - 0.5) &&
        (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().y + 2 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().y+0.8) &&
        (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().z + 0.5 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().z - 0.5)) {
        if (decoys[j].getAttribute('state') == 'up') {
          decoys[j].setAttribute('state', 'sw')
          setTimeout(function (ob) { ob.setAttribute('state', 'down') }, 1000, decoys[j])
          decoys[j].emit('down');
          score += 3;
          var tscore = document.createElement('a-text');
          tscore.setAttribute('value', '+3');
          tscore.setAttribute('rotation', '0 0 0');
          tscore.setAttribute('scale', '5 5 5')
          tscore.setAttribute('align', 'center')
          tscore.setAttribute('color', 'red')
          tscore.setAttribute('position', decoys[j].getAttribute('position'))
          var tanim = document.createElement('a-animation');
          tanim.setAttribute('attribute', 'position')
          tanim.setAttribute('dur', '2000')
          tanim.setAttribute('fill', 'forwards')
          tanim.setAttribute('easing', 'linear')
          tanim.setAttribute('to', decoys[j].object3D.position.x + ' ' + (decoys[j].object3D.position.y + 4) + ' ' + decoys[j].object3D.position.z)
          tscore.appendChild(tanim)
          scene.appendChild(tscore);
          setTimeout(function (idd) { cam.sceneEl.removeChild(idd); }, 2000, tscore);
          function call() {
            worker = decoys[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
            if (worker.getAttribute('state') == 'up' || worker.getAttribute('state') == 'sw')
              call()
            if (worker.getAttribute('state') == 'down') {
              worker.emit('up')
              worker.setAttribute('state', 'sw');
              setTimeout(function (kuss) { kuss.setAttribute('state', 'up') }, 1000, worker)
            }
          }
          document.querySelector('#score').setAttribute('value', 'Score: ' + score);
        }
      }
    }
    for (j = 0; j < decoys.length; ++j)
      for (i = 0; i < divs.length; ++i) {
        if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().x + 1 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().x - 1) &&
          (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().y + 2.2 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().y) &&
          (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().z + 1 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().z - 1)) {
          if (decoys[j].getAttribute('state') == 'up') {
            decoys[j].setAttribute('state', 'sw')
            setTimeout(function (ob) { ob.setAttribute('state', 'down') }, 1000, decoys[j])
            decoys[j].emit('down');
            score += 1;
            var tscore = document.createElement('a-text');
            tscore.setAttribute('value', '+1');
            tscore.setAttribute('rotation', '0 0 0');
            tscore.setAttribute('scale', '5 5 5')
            tscore.setAttribute('align', 'center')
            tscore.setAttribute('color', 'red')
            tscore.setAttribute('position', decoys[j].getAttribute('position'))
            var tanim = document.createElement('a-animation');
            tanim.setAttribute('attribute', 'position')
            tanim.setAttribute('dur', '2000')
            tanim.setAttribute('fill', 'forwards')
            tanim.setAttribute('easing', 'linear')
            tanim.setAttribute('to', decoys[j].object3D.position.x + ' ' + (decoys[j].object3D.position.y + 4) + ' ' + decoys[j].object3D.position.z)
            tscore.appendChild(tanim)
            scene.appendChild(tscore);
            setTimeout(function (idd) { cam.sceneEl.removeChild(idd); }, 2000, tscore);
            function call() {
              worker = decoys[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
              if (worker.getAttribute('state') == 'up' || worker.getAttribute('state') == 'sw')
                call()
              if (worker.getAttribute('state') == 'down') {
                worker.emit('up')
                worker.setAttribute('state', 'sw');
                setTimeout(function (kuss) { kuss.setAttribute('state', 'up') }, 1000, worker)
              }
            }
            document.querySelector('#score').setAttribute('value', 'Score: ' + score);
          }
        }

      }
    for (i = 0; i < divs.length; ++i)
      if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= playbutton.object3D.getWorldPosition().x + 0.5 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= playbutton.object3D.getWorldPosition().x - 0.5) &&
        (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= playbutton.object3D.getWorldPosition().y + 0.5 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= playbutton.object3D.getWorldPosition().y - 0.5) &&
        (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= playbutton.object3D.getWorldPosition().z + 0.5 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= playbutton.object3D.getWorldPosition().z - 0.5))
        document.querySelector('#playbutton').emit('collide')
  }
}); 