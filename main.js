// main.js

let scene, camera, renderer, cube1, cube2, currentProduct;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create product 1 (e.g., a simple cube)
    const geometry1 = new THREE.BoxGeometry();
    const material1 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    cube1 = new THREE.Mesh(geometry1, material1);

    // Create product 2 (e.g., another simple cube with a different color)
    const geometry2 = new THREE.BoxGeometry();
    const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    cube2 = new THREE.Mesh(geometry2, material2);

    // Add a point light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 5;

    window.addEventListener('resize', onWindowResize, false);

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (currentProduct === 1) {
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
    } else if (currentProduct === 2) {
        cube2.rotation.x += 0.01;
        cube2.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

function showProduct(productNumber) {
    if (currentProduct) {
        scene.remove(currentProduct === 1 ? cube1 : cube2);
    }
    
    if (productNumber === 1) {
        scene.add(cube1);
        currentProduct = 1;
    } else if (productNumber === 2) {
        scene.add(cube2);
        currentProduct = 2;
    }
}

init();
