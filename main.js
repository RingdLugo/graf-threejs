import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f5f5); // Fondo pastel claro
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y materiales pastel
const geometry = new THREE.BoxGeometry(1, 1, 1);

const materialPastelGreen = new THREE.MeshStandardMaterial({ color: 0xa8e6cf }); // Verde pastel
const materialPastelBlue = new THREE.MeshStandardMaterial({ color: 0xa1c4fd }); // Azul pastel
const materialPastelPink = new THREE.MeshStandardMaterial({ color: 0xffd3b6 }); // Rosa pastel
const materialPastelLavender = new THREE.MeshStandardMaterial({ color: 0xd4a5e3 }); // Lavanda pastel
const materialPastelYellow = new THREE.MeshStandardMaterial({ color: 0xfff4b8 }); // Amarillo pastel

// Crear cubos con colores pastel
const cubeGreen = new THREE.Mesh(geometry, materialPastelGreen);
cubeGreen.position.x = -3;
scene.add(cubeGreen);

const cubeBlue = new THREE.Mesh(geometry, materialPastelBlue);
cubeBlue.position.x = -1.5;
scene.add(cubeBlue);

const cubePink = new THREE.Mesh(geometry, materialPastelPink);
cubePink.position.x = 0;
scene.add(cubePink);

const cubeLavender = new THREE.Mesh(geometry, materialPastelLavender);
cubeLavender.position.x = 1.5;
scene.add(cubeLavender);

const cubeYellow = new THREE.Mesh(geometry, materialPastelYellow);
cubeYellow.position.x = 3;
scene.add(cubeYellow);

// Agregar luces para mejor visualización
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 7;

// Función de animación con distintas velocidades
function animate() {
    cubeGreen.rotation.x += 0.008;
    cubeGreen.rotation.y += 0.005;

    cubeBlue.rotation.x += 0.012;
    cubeBlue.rotation.y += 0.01;

    cubePink.rotation.x += 0.015;
    cubePink.rotation.y += 0.02;

    cubeLavender.rotation.x += 0.02;
    cubeLavender.rotation.y += 0.015;

    cubeYellow.rotation.x += 0.01;
    cubeYellow.rotation.y += 0.025;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);

// Ajustar al redimensionar ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});