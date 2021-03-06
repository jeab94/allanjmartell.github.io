function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  this.piernaIzq.position.z=0;
  this.piernaIzq.position.y=-5;
  this.piernaDer.position.z=5;
  this.piernaDer.position.y=-5;
  cuerpo.position.z=2.5;
}

var pieza,escena,camara,renderizador;

Pieza.prototype = new THREE.Object3D;

function setup(){
  pieza = new Pieza();
  escena = new THREE.Scene();
  escena.add(pieza);
  escena.rotateY(Math.PI/4);
  camara= new THREE.PerspectiveCamera();
  camara.position.z=30;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
}

function loop(){
  requestAnimationFrame(loop); 
   if(Math.abs(pieza.pierna.rotateZ)>1)
    step=-step;
  pieza.piernaIzq.rotateZ+(step);
  pieza.piernaDer.rotateZ(0.1);
  renderizador.render(escena,camara);
}

setup();
loop();
