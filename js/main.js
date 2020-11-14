var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000000000005 );
var loaded_system = "";
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('parent_div').appendChild( renderer.domElement );
var starGeometry = new THREE.SphereGeometry(10000000000000);
var starMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("starfield.png"),
  side: THREE.DoubleSide,
  shininess: 0
});
var starField = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starField);
const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene.add( light );



for(var i = 0; i < planets.length; i++){
	var geometry = new THREE.SphereGeometry(planets[i].radius,32,24);
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );
	sphere.position.z = planets[i].distance;
	planets[i].sphere = sphere;
	geometry = new THREE.TorusGeometry(planets[i].distance,100000000);
	material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var ring = new THREE.Mesh( geometry, material );
	scene.add( ring );
	ring.rotation.x = -(90*(Math.PI/180.0));
	planets[i].ring = ring;
}



camera.position.z = 149600000000 + 12756000;

var pressed_keys = {};

window.onkeyup = function(e) { pressed_keys[e.keyCode] = false; }
window.onkeydown = function(e) { pressed_keys[e.keyCode] = true; }


var tick = (new Date()).getTime();
var tick_count = 0;



function animate() {
	requestAnimationFrame( animate );

  if(app.current_system != loaded_system){
    //dump and load all planets/stars/moons/satellites
  }
	var tick2 = (new Date()).getTime();
	if(tick2 > tick){
		tick_count++;


		//pitch up
		if(pressed_keys["83"]){
			camera.rotateX(.01);
		}

		//pitch down
		if(pressed_keys["87"]){
			camera.rotateX(-.01);
		}

		//yaw left
		if(pressed_keys["65"]){
			camera.rotateY(.01);
		}

		//yaw right
		if(pressed_keys["68"]){
			camera.rotateY(-.01);
		}

		//roll left
		if(pressed_keys["81"]){
			camera.rotateZ(.01);
		}

		//roll right
		if(pressed_keys["69"]){
			camera.rotateZ(-.01);
		}

		//throttle up
		if(pressed_keys["82"]){
			if(app.velocity == 0){
				app.velocity = .01;
			}
			app.velocity *= 1.05;
		}

		//throttle down
		if(pressed_keys["70"]){
			app.velocity *= .95;
		}

		//stop
		if(pressed_keys["88"]){
			app.velocity = 0;
		}
		camera.translateZ(-1*app.velocity);

		//move right
		if(pressed_keys["67"]){
			camera.translateX(.01);
		}
		//move left
		if(pressed_keys["90"]){
			camera.translateX(-.01);
		}
		//move up
		if(pressed_keys["84"]){
			camera.translateY(.01);
		}
		//move down
		if(pressed_keys["71"]){
			camera.translateY(-.01);
		}


		for(var i = 0 ; i < planets.length; i++){
			if(planets[i].days > 0){
				var distance = planets[i].distance; // from the centre of orbit
				var radians = (0.5 * Math.PI)+(1*tick_count*((2.0 * Math.PI)/(planets[i].days * 86400000)));

				planets[i].sphere.position.x = Math.cos(radians) * distance;
				planets[i].sphere.position.z = Math.sin(radians) * distance;

				//planets[i].sphere.rotateOnWorldAxis(new THREE.Vector3(0,1,0),10000000*((2.0 * Math.PI)/(planets[i].days * 86400000)));
			}
		}

		tick = tick2;
	}
	renderer.render( scene, camera );
}
animate();
