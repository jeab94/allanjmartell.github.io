var cubos=[];
var mallacubo=[];
var n= new THREE.Color("rgb(0,0,0)");
var b= new THREE.Color("rgb(130,130,130)");
var blanco= new THREE.MeshBasicMaterial(b);
var negro= new THREE.MeshBasicMaterial(n);


for (var j=1;j<=8;j++){
   cubo.push(new THREE.BoxGeometry(10,10,10));
   cubo[j].translate(j,0,0);
   var k=j%2;
  if (m==0){
  mallacubo[j]= new THREE.Mesh(geometry,blanco);}
  else{
  mallacubo[j]= new THREE.Mesh(geometry,negro);}  
}

var escena=new THREE.Scene();
escena.add(mallacubo);

var camara=new THREE.PerspectiveCamera();
camara.position.z=500;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);