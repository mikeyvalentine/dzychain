import * as THREE from './three/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth/2, window.innerHeight/2, false);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var loader = new THREE.FontLoader();
let textMesh;
loader.load("./three/examples/fonts/optimer_bold.typeface.json", function(font) {

    var textGeo = new THREE.TextGeometry("Daisy Chain", {

        font: font,
        size: 1,
        height: .05,
        curveSegments: .01,
        bevelThickness: .01,
        bevelSize: .01,
        bevelEnabled: true

     });

     const textMat = new THREE.MeshPhysicalMaterial({color: 0xFFffFF});
     textMesh = new THREE.Mesh(textGeo, textMat);
 
     scene.add(textMesh);

     return textMesh;
 
});

camera.position.z = 10;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += .01;
    cube.rotation.y += .01;
    textMesh.rotation.y += .01;
    renderer.render(scene,camera);
}
animate();