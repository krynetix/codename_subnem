logger.info("loading settings");

Settings = Klass(Object, {
  width: 1000,
  height: 1000,
  player_ship_image_path: "assets/game/fighter_x1/main.png",
  initialize: function(){
  }
});

var settings = new Settings();
