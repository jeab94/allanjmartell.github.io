//Geometrias
var basepeon = new THREE.CylinderGeometry(5,5,2,10);//Altura = 2
var basepeon2= new THREE.TorusGeometry(3,2,8,100);//Altura = 4
basepeon2.rotateX(Math.PI/2);
basepeon2.translate(0,2,0);

//Mesh
var mbasepeon = new THREE.Mesh(basepeon);
var mbasepeon2= new THREE.Mesh(basepeon2);

//Acoplamiento
var peonfinal = new THREE.Geometry();
peonfinal.merge(mbasepeon.geometry,mbasepeon.matrix);
peonfinal.merge(mbasepeon2.geometry,mbasepeon2.matrix);


//Material
var material= new THREE.MeshNormalMaterial();
var peon= new THREE.Mesh(peonfinal,material);

var escena,camara,renderizador;
escena = new THREE.Scene();
//escena.rotateX(Math.PI/4);
//Camara
camara = new THREE.PerspectiveCamera();
camara.position.z=20;
 
escena.add(peon);
  
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);