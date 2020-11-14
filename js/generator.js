var generateUniverse = function(){


  for(var i = 0; i < 100; i++){
    var id = generateId();
    app.stars[id] = {
      name : "star_name_" + getRandomInt(10000000),
      radius : 1000000 + getRandomInt(1000000000),
      id : id,
      planets : [],
    };
  }
  for(var i = 1; i < app.stars.length; i++){
    var num = getRandomInt(10) + 1;
      for(var j = 0; j < num; j++){
        var id = generateId();
        app.stars[i].planets.push({
            name: "planet_name_" + getRandomInt(10000000),
            radius : 1000000 + getRandomInt(1000000000),
            distance: app.stars[i].radius + 10000 + getRandomInt(10000000000000),
            days: 1 + getRandomInt(1000),
            hours: 1 + getRandomInt(100),
            id : generateId(),
            moons: [],
            satellites: [],
        });
      }
  }
  for(var i = 1; i < app.stars.length; i++){
      for(var j = 0; j < app.stars[i].planets.length; j++){
        var num = getRandomInt(10) + 1;
        for(var k = 0; k < num; k++){
          app.stars[i].planets[j].moons.push({
              name: "moon_name_" + getRandomInt(10000000),
              radius : 500 + getRandomInt(10000),
              distance: app.stars[i].planets[j].radius + 10000 + getRandomInt(10000000),
              days: 1 + getRandomInt(100),
              hours: 1 + getRandomInt(2400),
              id : generateId(),
              satellites: [],
          });
        }
      }
    }
    for(var i = 1; i < app.stars.length; i++){
        for(var j = 0; j < app.stars[i].planets.length; j++){
          var num = getRandomInt(10) + 1;
          for(var k = 0; k < num; k++){
            app.stars[i].planets[j].satellites.push({
                name: "satellite_name_" + getRandomInt(10000000),
                distance: app.stars[i].planets[j].radius + 10000 + getRandomInt(10000000),
                days: 1 + getRandomInt(100),
                id : generateId(),
            });
          }
        }
      }
      for(var i = 1; i < app.stars.length; i++){
          for(var j = 0; j < app.stars[i].planets.length; j++){
            for(var k = 0; k < app.stars[i].planets[j].moons.length; k++){
              var num = getRandomInt(10) + 1;
              for(var l = 0; l < num; l++){
                app.stars[i].planets[j].moons[k].satellites.push({
                    name: "satellite_name_" + getRandomInt(10000000),
                    distance: app.stars[i].planets[j].moons[k].radius + 10000 + getRandomInt(10000000),
                    days: 1 + getRandomInt(100),
                    id : generateId(),
                });
              }
            }
          }
        }


};
