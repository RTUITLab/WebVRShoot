
AFRAME.registerComponent('collision', {
  tick: function () {
    var divs = document.querySelectorAll('#shooot'), i;
    var decoys = document.querySelectorAll('#target'), j;
    for (j = 0; j < decoys.length; ++j)
      for (i = 0; i < divs.length; ++i) {
        if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().x + 0.5 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().x - 0.5) &&
          (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().y + 2 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().y + 0.8) &&
          (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= decoys[j].object3D.getWorldPosition().z + 1.1 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= decoys[j].object3D.getWorldPosition().z - 1.1)) {
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
            document.querySelector('#score').setAttribute('value', 'Score: ' + score);
          }
        }

      }
    let mtargetc = document.querySelector('#mtar')
    for (i = 0; i < divs.length; ++i) {
      if (mtargetc.getAttribute('visible') == true)
        if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= mtargetc.object3D.getWorldPosition().x + 1 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= mtargetc.object3D.getWorldPosition().x - 1) &&
          (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= mtargetc.object3D.getWorldPosition().y + 2.2 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= mtargetc.object3D.getWorldPosition().y) &&
          (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= mtargetc.object3D.getWorldPosition().z + 1 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= mtargetc.object3D.getWorldPosition().z - 1)) {
          score += 5;
          mtargetc.setAttribute('visible', 'false')
          var tscore = document.createElement('a-text');
          tscore.setAttribute('value', '+5');
          tscore.setAttribute('rotation', '0 0 0');
          tscore.setAttribute('scale', '5 5 5')
          tscore.setAttribute('align', 'center')
          tscore.setAttribute('color', 'red')
          tscore.setAttribute('position', mtargetc.getAttribute('position'))
          var tanim = document.createElement('a-animation');
          tanim.setAttribute('attribute', 'position')
          tanim.setAttribute('dur', '2000')
          tanim.setAttribute('fill', 'forwards')
          tanim.setAttribute('easing', 'linear')
          tanim.setAttribute('to', mtargetc.object3D.position.x + ' ' + (mtargetc.object3D.position.y + 4) + ' ' + mtargetc.object3D.position.z)
          tscore.appendChild(tanim)
          scene.appendChild(tscore);
          setTimeout(function (idd) { cam.sceneEl.removeChild(idd); }, 2000, tscore);
          document.querySelector('#score').setAttribute('value', 'Score: ' + score);
        }
    }
    for (i = 0; i < divs.length; ++i)
      if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= playbutton.object3D.getWorldPosition().x + 0.5 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= playbutton.object3D.getWorldPosition().x - 0.5) &&
        (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= playbutton.object3D.getWorldPosition().y + 0.5 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= playbutton.object3D.getWorldPosition().y - 0.5) &&
        (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= playbutton.object3D.getWorldPosition().z + 0.5 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= playbutton.object3D.getWorldPosition().z - 0.5))
        document.querySelector('#playbutton').emit('collide')
    if (document.querySelector('#gun2b').getAttribute('visible') == true)
      for (i = 0; i < divs.length; ++i)
        if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= gun2b.object3D.getWorldPosition().x + 0.2 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= gun2b.object3D.getWorldPosition().x - 0.2) &&
          (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= gun2b.object3D.getWorldPosition().y + 0.5 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= gun2b.object3D.getWorldPosition().y - 0.5) &&
          (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= gun2b.object3D.getWorldPosition().z + 0.2 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= gun2b.object3D.getWorldPosition().z - 0.2)) {
          document.querySelector('#gunmodel').setAttribute('obj-model', "obj: #g2obj;mtl: #g2mtl")
          gunnow = 2;
        }
    for (i = 0; i < divs.length; ++i)
      if (document.querySelector('#gun1b').getAttribute('visible') == true)
        if ((divs[i].object3D.getWorldPosition().x - divs[i].getAttribute('radius') <= gun1b.object3D.getWorldPosition().x + 0.2 && divs[i].object3D.getWorldPosition().x + parseInt(divs[i].getAttribute('radius')) >= gun1b.object3D.getWorldPosition().x - 0.2) &&
          (divs[i].object3D.getWorldPosition().y - divs[i].getAttribute('radius') <= gun1b.object3D.getWorldPosition().y + 0.5 && divs[i].object3D.getWorldPosition().y + parseInt(divs[i].getAttribute('radius')) >= gun1b.object3D.getWorldPosition().y - 0.5) &&
          (divs[i].object3D.getWorldPosition().z - divs[i].getAttribute('radius') <= gun1b.object3D.getWorldPosition().z + 0.2 && divs[i].object3D.getWorldPosition().z + parseInt(divs[i].getAttribute('radius')) >= gun1b.object3D.getWorldPosition().z - 0.2)) {
          document.querySelector('#gunmodel').setAttribute('obj-model', "obj: #gobj;mtl: #gmtl")
          gunnow = 1;
        }
  }
}); 