
import * as THREE from './three/build/three.module.js';
import { OctahedronGeometry } from './three/src/geometries/OctahedronGeometry.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( 3*window.innerWidth/4, 3*window.innerHeight/4, false);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild( renderer.domElement );

const geometry = new OctahedronGeometry(.6, 0);
const material = new THREE.MeshLambertMaterial({color: 0x00ff00});
const cube = new THREE.Mesh( geometry, material );
cube.translateY(-1.5);
cube.rotateX(1.5);
scene.add( cube );

const light2 = new THREE.PointLight( 0xf00fff, 100, 100, 2 );
light2.translateY(0);
scene.add( light2 );

const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set(0, -100, 1);
scene.add( light );
 

let fogColor = new THREE.Color(0xffffff);
 
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.0025, 100);

var loader = new THREE.FontLoader();
let textMesh;
loader.load("./three/examples/fonts/gentilis_bold.typeface.json", function(font) {

    var textGeo = new THREE.TextGeometry("Daisy Chain", {

        font: font,
        size: 1,
        height: .01,
        curveSegments: .5,
        bevelThickness: .09,
        bevelSize: .05,
        bevelEnabled: true

     });

     const textMat = new THREE.MeshPhysicalMaterial({color: 0xFFffFF});
     textMat.reflectivity = 2;
     textMat.clearcoat = 1;
     textMesh = new THREE.Mesh(textGeo, textMat);
     textGeo.center();

     scene.add(textMesh);

     return textMesh;
 
});

camera.position.z = 10;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.z -= .01;
    textMesh.rotation.y += .01;
    renderer.render(scene,camera);
}
animate();