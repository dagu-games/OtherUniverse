var generateUniverse = function(){


  for(var i = 0; i < 100; i++){
    var star = {
      name : "star_name_" + getRandomInt(10000000),
      radius : 1000000 + getRandomInt(1000000000),
      id : generateId(),
      planets : [],
    };
    for(var j = 0; j < 10; j++){
      var moons = [];
      for(var k = 0; k < 5; k++){
        moons.push({
            name: "moon_name_" + getRandomInt(10000000),
            radius : 100 + getRandomInt(10000),
            distance: 1000000 + getRandomInt(1000000000),
            days: 1 + getRandomInt(100),
            id : generateId(),
        });
      }
      star.planets.push({
        name: "planet_name_" + getRandomInt(10000000),
        radius : 1000 + getRandomInt(100000000),
        distance: 10000000000 + getRandomInt(10000000000000),
        days: 1 + getRandomInt(100000),
        id : generateId(),
        moons: moons,
      });
    }
    app.stars.push(star);
  }
}
