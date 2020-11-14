var app = new Vue({
  el: '#info',
  data: {
    velocity: 0,
    current_system: "idSol",
    stars:[
      {
        name: "Sol",
        radius: 696350000,
        id: "idSol",
        planets: [
        	{
        		name: "Mercury",
        		radius: 4878000/2.0,
        		distance: 57900000000,
        		days: 88.0,
            id: generateId(),
        	},
        	{
        		name: "Venus",
        		radius: 12104000/2.0,
        		distance: 108160000000,
        		days: 224.7,
            id: generateId(),
        	},
        	{
        		name: "Earth",
        		radius: 12756000/2.0,
        		distance: 149600000000,
        		days: 365.2,
            id: generateId(),
        	},
        	{
        		name: "Mars",
        		radius: 6794000/2.0,
        		distance: 227936640000,
        		days: 687,
            id: generateId(),
        	},
        	{
        		name: "Jupiter",
        		radius: 142984000/2.0,
        		distance: 778369000000,
        		days: 4331,
            id: generateId(),
        	},
        	{
        		name: "Saturn",
        		radius: 120536000/2.0,
        		distance: 1427034000000,
        		days: 10747,
            id: generateId(),
        	},
        	{
        		name: "Uranus",
        		radius: 51118000/2.0,
        		distance: 2870658186000,
        		days: 30589,
            id: generateId(),
        	},
        	{
        		name: "Neptune",
        		radius: 49532000/2.0,
        		distance: 4496976000000,
        		days: 59800,
            id: generateId(),
        	},
        ],
      },
    ],
  },
  methods: {
	test: function(id){
		console.log('henlo');
	},

  },
});


var getRandomInt = function(max){
  return Math.floor(Math.random() * Math.floor(max));
};

var id_log = [];
var generateId = function(){
    var str = "id" + getRandomInt(10000000000);
    var found = false;

    for(var i = 0; i < id_log.length; i++){
      if(id_log[i] == str){
        found = true;
      }
      if(found == true){
        str = "id" + getRandomInt(10000000000);
        found = false;
        i = 0;
      }
    }
    id_log.push(str);
    return str;
};
