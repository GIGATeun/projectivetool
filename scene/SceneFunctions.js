var setupRenderer = function() {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    return renderer;
};

var setupControls = function() {
    controls = new THREE.OrbitControls(camera, document.getElementsByTagName("canvas")[0]);
    controls.enableDamping = true;
    controls.dampingFactor = 1.2;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.6;
    controls.enableKeys = false;
    controls.minDistance = 2;
    controls.maxDistance = 40;

    return controls;
};

var setupCamera = function() {
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(7, -7, 5);
    camera.lookAt(0, 0, 0);

    return camera;
};

var setupLights = function() {
    var light = new THREE.AmbientLight(0xffffff, 0.5, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0xffffff, 0.7);
    scene.add(light);
    scene.add(light.target);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
};

var setupGui = function() {
    var Matrix = function() {
        this.a = 2;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 2;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.i = 2;
    };

    var matrixState = new Matrix();
    var gui = new dat.GUI();
    var transformRange = 7;
    var charCode = 97;
    for(var i = 0; i < 9; i++) {
        gui.add(matrixState, String.fromCharCode(charCode + i), -transformRange, transformRange);
    }

    return matrixState;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
