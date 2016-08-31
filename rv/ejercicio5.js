var puntos= [];

for (var i=0;i<50;i++){
  puntos.push(new THREE.Vector2(5,i));
}

var forma= new THREE.LatheGeometry(puntos);

var material= new THREE.MeshNormalMaterial();

var malla= new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/6);


var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=40;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
