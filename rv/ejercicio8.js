var camara,escena,renderizador;
var torre1,torre2;

init();
loop();

function init(){
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=50; 
  
  escena = new THREE.Scene();
  
  var textura1 = new THREE.TextureLoader();
  textura1.load("marmolblanco.jpg");
  //var cargador2 = new THREE.TextureLoader();
  //cargador2.load("marmolnegro.jpg",TEXTURA.retrollamada2);
  var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
  
  //Torre1
  torre1 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre1.position.y=5;
  torre1.position.z=-10;
  torre1.position.x=10;
  //Torre2
  torre2 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre2.position.y=5;
  torre2.position.z=-80;
  torre2.position.x=10;
  
  escena.add(torre1,torre2);
  
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
}

//TEXTURA.retrollamada2 = function(textura2){
  //var marmolnegro = new THREE.MeshBasicMaterial({map:textura2}); 
  //Torre3
  //TEXTURA.malla3 = new THREE.Mesh(torrefinal11,marmolnegro);
  //TEXTURA.malla3.position.y=5;
  //TEXTURA.malla3.z=-80;
  //TEXTURA.malla3.position.x=80;
  //torre4
  //TEXTURA.malla4 = new THREE.Mesh(torrefinal11,marmolnegro);
  //TEXTURA.malla4.position.y=5;
  //TEXTURA.malla4.position.z=-10;
  //TEXTURA.malla4.position.x=80;
//}

function loop(){
  requestAnimationFrame(loop);
  if(malla1 !==undefined){init();}
  renderizador.render(escena,camara);
} 
