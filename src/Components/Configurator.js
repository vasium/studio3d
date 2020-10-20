import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import '@google/model-viewer/dist/model-viewer';
import { Color } from 'three';
// import 'react-app-polyfill/stable';

function Configurator() {
  // === THREE.JS CODE START ===
  // const spinningLoader = document.getElementById('js-loader');
  // const tray = document.getElementById('js-tray-slide');
  const modelPath = 'test.gltf';

  var theModel;
  var activeOption;

  const colors = [
    {
      texture: 'img/0025.jpg',
      size: [12, 12, 12],
      shininess: 60,
    },
    {
      texture: 'img/0504.jpg',
      size: [12, 12, 12],
      shininess: 60,
    },
    {
      texture: 'img/metal01.jpg',
      size: [6, 6, 6],
      shininess: 60,
    },
    // {
    //   color: '438AAC',
    // },
    // {
    //   color: '000000',
    // },
  ];

  let txt1 = new THREE.TextureLoader().load('img/0025.jpg');
  txt1.repeat.set([6], [6], [6]);
  txt1.wrapS = THREE.RepeatWrapping;
  txt1.wrapT = THREE.RepeatWrapping;

  // Initial material
  const initialMaterial1 = new THREE.MeshPhongMaterial({
    // color: 0x000000,
    map: txt1,
    shininess: 0,
  });

  let txt2 = new THREE.TextureLoader().load('img/pattern_.jpg');
  txt2.repeat.set([12], [12], [12]);
  txt2.wrapS = THREE.RepeatWrapping;
  txt2.wrapT = THREE.RepeatWrapping;

  // Initial material
  const initialMaterial2 = new THREE.MeshPhongMaterial({
    // color: 0x000000,
    map: txt2,
    shininess: 0,
  });

  let txt3 = new THREE.TextureLoader().load('img/wood_.jpg');
  txt3.repeat.set([6], [6], [6]);
  txt3.wrapS = THREE.RepeatWrapping;
  txt3.wrapT = THREE.RepeatWrapping;

  // Initial material
  const initialMaterial3 = new THREE.MeshPhongMaterial({
    // color: 0x000000,
    map: txt3,
    shininess: 0,
  });

  const initialMap = [
    { childID: 'Metal', mtl: initialMaterial1 },
    { childID: 'Pillow', mtl: initialMaterial2 },
    { childID: 'Wood', mtl: initialMaterial3 },
  ];

  // Init the object loader
  var loader = new GLTFLoader();

  loader.load(
    modelPath,
    function (gltf) {
      theModel = gltf.scene;

      theModel.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });

      // Set the models initial scale
      theModel.rotation.y = Math.PI;

      // Offset the y position a bit
      theModel.position.y = 0;

      // Set initial textures
      for (let object of initialMap) {
        initColor(theModel, object.childID, object.mtl);
      }

      // Remove the loader
      // spinningLoader.remove();

      exportGLTF();
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  // Function - Add the textures to the models
  function initColor(parent, type, mtl) {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name.includes(type)) {
          o.material = mtl;
          o.nameID = type; // Set a new property to identify this object
        }
      }
    });
  }

  // // Function - Build Colors

  // function buildColors(colors) {
  //   for (let [i, color] of colors.entries()) {
  //     let swatch = document.createElement('div');
  //     swatch.classList.add('tray__swatch');

  //     if (color.texture) {
  //       swatch.style.backgroundImage = 'url(' + color.texture + ')';
  //     } else {
  //       swatch.style.background = '#' + color.color;
  //     }

  //     swatch.setAttribute('data-key', i);
  //     tray.append(swatch);
  //   }
  // }

  // buildColors(colors);

  // Select Option
  const options = document.querySelectorAll('.customizer-item');
  console.log(options);

  for (const option of options) {
    console.log(option);

    option.addEventListener('click', selectOption);
    // option.addEventListener('click', dexportGLTF);
  }

  function selectOption(e) {
    // console.log(e);

    let option = e.target;
    activeOption = e.target.dataset.option;
    for (const otherOption of options) {
      otherOption.classList.remove('--is-active');
    }
    option.classList.add('--is-active');
    if (activeOption == 'Metal1') {
      activeOption = 'Metal';
      selectSwatch(0);
    }
    if (activeOption == 'Metal2') {
      activeOption = 'Metal';
      selectSwatch(1);
    }
    if (activeOption == 'Metal3') {
      activeOption = 'Metal';
      selectSwatch(2);
    }
    // }
  }

  // Swatches
  const swatches = document.querySelectorAll('.tray__swatch');

  for (const swatch of swatches) {
    swatch.addEventListener('click', selectSwatch);
  }

  function selectSwatch(e) {
    let color = colors[e];
    let new_mtl;

    console.log('activeOption22222' + activeOption);
    if (color.texture) {
      let txt = new THREE.TextureLoader().load(color.texture, exportGLTF);
      txt.repeat.set(color.size[0], color.size[1], color.size[2]);
      txt.wrapS = THREE.RepeatWrapping;
      txt.wrapT = THREE.RepeatWrapping;
      new_mtl = new THREE.MeshPhongMaterial({
        map: txt,
        shininess: color.shininess ? color.shininess : 10,
      });
      console.log('Color: ' + color.color);

      console.log(new_mtl);
      console.log(theModel);
      console.log(activeOption);
      console.log('Active' + new_mtl);

      setMaterial(theModel, activeOption, new_mtl);
    } else {
      new_mtl = new THREE.MeshPhongMaterial({
        color: parseInt('0x' + color.color),
        shininess: color.shininess ? color.shininess : 10,
      });
      console.log('Color: ' + color.color);
      console.log(new_mtl);
      console.log(theModel);
      console.log(activeOption);
      console.log('Active' + new_mtl);
      setMaterial(theModel, activeOption, new_mtl);
      exportGLTF();
    }
  }

  function setMaterial(parent, type, mtl) {
    console.log('parent' + parent);
    console.log('type' + type);
    console.log('mtl' + mtl);
    parent.traverse((o) => {
      if (o.isMesh && o.nameID != null) {
        if (o.nameID == type) {
          o.material = mtl;
        }
      }
    });
  }

  // // Slider
  // var slider = document.getElementById('js-tray'),
  //   sliderItems = document.getElementById('js-tray-slide'),
  //   difference;

  // function slide(wrapper, items) {
  //   var posX1 = 0,
  //     posX2 = 0,
  //     posInitial,
  //     threshold = 20,
  //     posFinal,
  //     slides = items.getElementsByClassName('tray__swatch');

  //   // Mouse events
  //   items.onmousedown = dragStart;

  //   // Touch events
  //   items.addEventListener('touchstart', dragStart);
  //   items.addEventListener('touchend', dragEnd);
  //   items.addEventListener('touchmove', dragAction);

  //   function dragStart(e) {
  //     e = e || window.event;
  //     posInitial = items.offsetLeft;
  //     difference = sliderItems.offsetWidth - slider.offsetWidth;
  //     difference = difference * -1;

  //     if (e.type == 'touchstart') {
  //       posX1 = e.touches[0].clientX;
  //     } else {
  //       posX1 = e.clientX;
  //       document.onmouseup = dragEnd;
  //       document.onmousemove = dragAction;
  //     }
  //   }

  //   function dragAction(e) {
  //     e = e || window.event;

  //     if (e.type == 'touchmove') {
  //       posX2 = posX1 - e.touches[0].clientX;
  //       posX1 = e.touches[0].clientX;
  //     } else {
  //       posX2 = posX1 - e.clientX;
  //       posX1 = e.clientX;
  //     }

  //     if (
  //       items.offsetLeft - posX2 <= 0 &&
  //       items.offsetLeft - posX2 >= difference
  //     ) {
  //       items.style.left = items.offsetLeft - posX2 + 'px';
  //     }
  //   }

  //   function dragEnd(e) {
  //     posFinal = items.offsetLeft;
  //     if (posFinal - posInitial < -threshold) {
  //     } else if (posFinal - posInitial > threshold) {
  //     } else {
  //       items.style.left = posInitial + 'px';
  //     }

  //     document.onmouseup = null;
  //     document.onmousemove = null;
  //   }
  // }

  // slide(slider, sliderItems);

  function exportGLTF() {
    var gltfExporter = new GLTFExporter();
    gltfExporter.parse(
      theModel,
      function (result) {
        let output = JSON.stringify(result, null, 2);
        let blob = new Blob([output], { type: 'application/json' });
        let myBlob = URL.createObjectURL(blob);
        document.getElementById('viewer3').src = myBlob;
      },
      options
    );
  }

  // === THREE.JS EXAMPLE CODE END ===

  return <div></div>;
}

export default Configurator;
