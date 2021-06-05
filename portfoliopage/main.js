import './style.css';

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

/* const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
}); */

const renderer = new THREE.WebGLRenderer();



renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
document.body.appendChild(renderer.domElement);


const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);


function addLines() {

  const material = new THREE.LineBasicMaterial( {linewidth: THREE.MathUtils.randFloatSpread(20)});

  const y = THREE.MathUtils.randFloatSpread(100);
  const y2 = THREE.MathUtils.randFloatSpread(100);
  const x = THREE.MathUtils.randFloatSpread(100);
  const z = THREE.MathUtils.randFloatSpread(100);
  const points = [];

  points.push(new THREE.Vector3(x, y, z));
  points.push(new THREE.Vector3(x, y2, z));

  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const line = new THREE.Line( geometry, material );

  scene.add(line);
}

Array(10).fill().forEach( addLines );

function addDodecahedron(){
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const geometry = new THREE.DodecahedronGeometry(10);
  const dodec = new THREE.Mesh(geometry, material);

  scene.add(dodec);
}

function addLight(light){
  scene.add(light);
}



console.log(document.getElementsByTagName("body")[0].id);

if (document.getElementsByTagName("body")[0].id == "about_page"){ //("body").data("title") === "about_page"){
  //this is a way to target a certain page with javascript
  console.log("got here");
  addDodecahedron();
  addLight(new THREE.AmbientLight(0xa0a0a0));
  const pointLight = new THREE.PointLight(0xff3000);
  pointLight.position.set(10, 20, 20);
  const lightHelper = new THREE.PointLightHelper(pointLight);
  addLight(pointLight);
  addLight(lightHelper);
 }

function animate() {
  requestAnimationFrame( animate );

  controls.update();

  renderer.render( scene, camera );


}

animate();
