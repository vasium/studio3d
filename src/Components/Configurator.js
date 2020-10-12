import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import '@google/model-viewer/dist/model-viewer';

function Configurator() {
  // === THREE.JS CODE START ===
  const spinningLoader = document.getElementById('js-loader');
  const tray = document.getElementById('js-tray-slide');
  const dragNotice = document.getElementById('js-drag-notice');
  const modelPath = 'chair.gltf';
  const backgroundColor = 0xf1f1f1;
  const canvas = document.getElementById('canvas');
  // const canvas = document.querySelector('#c');

  var theModel;
  var activeOption = 'Metal';
  var loaded = false;

  const colors = [
    {
      texture: 'img/wood_.jpg',
      size: [2, 2, 2],
      shininess: 60,
    },
    {
      texture: 'img/leather_Base_color.jpg',
      size: [1, 1, 1],
      shininess: 60,
    },

    {
      texture: 'img/fabric_.jpg',
      size: [4, 4, 4],
      shininess: 0,
    },

    {
      texture: 'img/pattern_.jpg',
      size: [8, 8, 8],
      shininess: 10,
    },

    {
      texture: 'img/denim_.jpg',
      size: [3, 3, 3],
      shininess: 0,
    },

    {
      texture: 'img/quilt_.jpg',
      size: [6, 6, 6],
      shininess: 0,
    },

    {
      color: '131417',
    },

    {
      color: '374047',
    },

    {
      color: '5f6e78',
    },

    {
      color: '7f8a93',
    },

    {
      color: '97a1a7',
    },
  ];

  // Init the scene
  const scene = new THREE.Scene();

  // Set background
  scene.background = new THREE.Color(backgroundColor);
  scene.fog = new THREE.Fog(backgroundColor, 20, 100);

  // Init the renderer
  // const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  // renderer.shadowMap.enabled = true;
  // renderer.setPixelRatio(window.devicePixelRatio);

  var cameraFar = 5;

  // document.body.appendChild(renderer.domElement);

  // Add a camerra
  var camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = cameraFar;
  camera.position.x = 0;

  // Initial material
  const initialMaterial = new THREE.MeshPhongMaterial({
    color: 0xf1f1f1,
    shininess: 10,
  });

  const initialMap = [
    { childID: 'Metal', mtl: initialMaterial },
    { childID: 'Pillow', mtl: initialMaterial },
    { childID: 'Wood', mtl: initialMaterial },
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
      theModel.scale.set(3, 3, 3);
      theModel.rotation.y = Math.PI;

      // Offset the y position a bit
      theModel.position.y = 0;

      // Set initial textures
      for (let object of initialMap) {
        initColor(theModel, object.childID, object.mtl);
      }

      // Add the model to the scene
      scene.add(theModel);

      // Remove the loader
      spinningLoader.remove();

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

  // Add lights
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
  hemiLight.position.set(0, 50, 0);

  // Add hemisphere light to scene
  scene.add(hemiLight);
  var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
  dirLight.position.set(-8, 12, 8);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize = new THREE.Vector2(4096, 4096);

  // Add directional Light to scene
  scene.add(dirLight);

  // // Floor
  // var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
  // var floorMaterial = new THREE.MeshPhongMaterial({
  //   color: 0xeeeeee,
  //   shininess: 0,
  // });

  // var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  // floor.rotation.x = -0.5 * Math.PI;
  // floor.receiveShadow = true;
  // floor.position.y = -1;
  // scene.add(floor);

  // Add controls
  // var controls = new OrbitControls(camera, renderer.domElement);
  // controls.maxPolarAngle = Math.PI / 2;
  // controls.minPolarAngle = Math.PI / 3;
  // controls.enableDamping = true;
  // controls.enablePan = false;
  // controls.dampingFactor = 0.1;
  // controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
  // controls.autoRotateSpeed = 0.2; // 30

  function animate() {
    // controls.update();
    // renderer.render(scene, camera);
    requestAnimationFrame(animate);

    // if (resizeRendererToDisplaySize(renderer)) {
    //   const canvas = renderer.domElement;
    //   camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //   camera.updateProjectionMatrix();
    // }

    // if (theModel != null && loaded == false) {
    //   initialRotation();
    //   dragNotice.classList.add('start');
    // }
  }

  animate();

  // // Function - New resizing method
  // function resizeRendererToDisplaySize(renderer) {
  //   const canvas = renderer.domElement;
  //   var width = window.innerWidth;
  //   var height = window.innerHeight;
  //   var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  //   var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  //   const needResize =
  //     canvasPixelWidth !== width || canvasPixelHeight !== height;
  //   if (needResize) {
  //     renderer.setSize(width, height, false);
  //   }
  //   return needResize;
  // }

  // Function - Build Colors

  function buildColors(colors) {
    for (let [i, color] of colors.entries()) {
      let swatch = document.createElement('div');
      swatch.classList.add('tray__swatch');

      if (color.texture) {
        swatch.style.backgroundImage = 'url(' + color.texture + ')';
      } else {
        swatch.style.background = '#' + color.color;
      }

      swatch.setAttribute('data-key', i);
      tray.append(swatch);
    }
  }

  buildColors(colors);

  // Select Option
  const options = document.querySelectorAll('.option');

  for (const option of options) {
    option.addEventListener('click', selectOption);
    // option.addEventListener('click', dexportGLTF);
  }

  function selectOption(e) {
    // console.log(e);
    let option = e.target;
    activeOption = e.target.dataset.option;
    // if (activeOption == 'Export') {
    //   exportGLTF();
    // } else if (activeOption == 'Test') {
    //   exportGLTF1();
    // } else {
    for (const otherOption of options) {
      otherOption.classList.remove('--is-active');
    }
    option.classList.add('--is-active');
    // }
  }

  // Swatches
  const swatches = document.querySelectorAll('.tray__swatch');

  for (const swatch of swatches) {
    swatch.addEventListener('click', selectSwatch);
  }

  async function selectSwatch(e) {
    let color = colors[parseInt(e.target.dataset.key)];
    let new_mtl;

    if (color.texture) {
      let txt = new THREE.TextureLoader().load(color.texture, exportGLTF);
      txt.repeat.set(color.size[0], color.size[1], color.size[2]);
      txt.wrapS = THREE.RepeatWrapping;
      txt.wrapT = THREE.RepeatWrapping;

      new_mtl = new THREE.MeshPhongMaterial({
        map: txt,
        shininess: color.shininess ? color.shininess : 10,
      });
      setMaterial(theModel, activeOption, new_mtl);
    } else {
      new_mtl = new THREE.MeshPhongMaterial({
        color: parseInt('0x' + color.color),
        shininess: color.shininess ? color.shininess : 10,
      });
      setMaterial(theModel, activeOption, new_mtl);
      exportGLTF();
    }
  }

  function setMaterial(parent, type, mtl) {
    parent.traverse((o) => {
      if (o.isMesh && o.nameID != null) {
        if (o.nameID == type) {
          o.material = mtl;
        }
      }
    });
    // exportGLTF();
  }

  // Function - Opening rotate
  let initRotate = 0;

  function initialRotation() {
    initRotate++;
    if (initRotate <= 120) {
      theModel.rotation.y += Math.PI / 60;
    } else {
      loaded = true;
    }
  }

  // Slider
  var slider = document.getElementById('js-tray'),
    sliderItems = document.getElementById('js-tray-slide'),
    difference;

  function slide(wrapper, items) {
    var posX1 = 0,
      posX2 = 0,
      posInitial,
      threshold = 20,
      posFinal,
      slides = items.getElementsByClassName('tray__swatch');

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    function dragStart(e) {
      e = e || window.event;
      posInitial = items.offsetLeft;
      difference = sliderItems.offsetWidth - slider.offsetWidth;
      difference = difference * -1;

      if (e.type == 'touchstart') {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }

    function dragAction(e) {
      e = e || window.event;

      if (e.type == 'touchmove') {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }

      if (
        items.offsetLeft - posX2 <= 0 &&
        items.offsetLeft - posX2 >= difference
      ) {
        items.style.left = items.offsetLeft - posX2 + 'px';
      }
    }

    function dragEnd(e) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
      } else if (posFinal - posInitial > threshold) {
      } else {
        items.style.left = posInitial + 'px';
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  slide(slider, sliderItems);

  // document.getElementById('ar').addEventListener('click', function () {
  //   exportGLTF();
  // });

  // document.getElementById('test').addEventListener('click', function () {
  //   exportGLTF1();
  // });

  // var link1 = document.createElement('a');
  var link = document.createElement('a');
  link.style.display = 'none';

  var gltfExporter = new GLTFExporter();

  function exportGLTF() {
    gltfExporter.parse(
      theModel,
      function (result) {
        let output = JSON.stringify(result, null, 2);
        let blob = new Blob([output], { type: 'application/json' });
        let myBlob = URL.createObjectURL(blob);
        document.getElementById('model-display').src = myBlob;
      },
      options
    );
  }

  // function saveString(text, filename) {
  //   save(new Blob([text], { type: 'application/json' }), filename);
  // }

  // function save(blob) {
  //   var myBlob = URL.createObjectURL(blob);

  //   document.getElementById('model-display').src = myBlob;
  //   // link.href =
  //   //   'intent://arvr.google.com/scene-viewer/1.1?file=' +
  //   //   URL.createObjectURL(blob) +
  //   //   '&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end';
  //   // link.click();
  // }

  // function dexportGLTF() {
  //   setTimeout(doSomething, 1000);
  //   function doSomething() {
  //     exportGLTF();
  //   }
  // }
  // dexportGLTF();

  // function exportGLTF1() {
  //   var gltfExporter = new GLTFExporter();

  //   gltfExporter.parse(
  //     scene,
  //     function (result) {
  //       console.log('Hej');
  //       var output = JSON.stringify(result, null, 2);
  //       saveString1(output, 'scene.gltf');
  //     },
  //     options
  //   );
  // }
  // function saveString1(text, filename) {
  //   save1(new Blob([text], { type: 'application/json' }), filename);
  // }

  // function save1(blob) {
  //   var myBlob = URL.createObjectURL(blob);

  //   document.getElementById('model-display').src = myBlob;
  //   link1.click();
  // }

  // === THREE.JS EXAMPLE CODE END ===

  return <div></div>;
}

export default Configurator;
