import './style.css';

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);

/* const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
}); */

const renderer = new THREE.WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
document.body.appendChild(renderer.domElement);


function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate();
