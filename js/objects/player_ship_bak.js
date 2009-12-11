// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja

PlayerShip = Klass(CanvasNode, {
  image_file: Object.loadImage(settings.player_ship_image_path),
  image: null,
  thruster: null,
  initialize: function(){
    console.log("initializing ship.");
    CanvasNode.initialize.call(this);
    this.thruster = new Thruster();
    this.physics_proxy = this.setup_physics_proxy();
    console.log("setup physics proxy.");
    this.image = new ImageNode(this.image_file);
    this.image.centered = true;
    this.image.y = 0;
    this.image.x = 0;
    this.image.ship = this;
    //this.append(this.image);
    console.log(this);
    console.log(this.physics_proxy);
  },
  setup_physics_proxy: function(){
    var body = null;
    var sd = new b2BoxDef();
    sd.extents.Set(20, 5);
    sd.density = 0.5;

    var bd = new b2BodyDef();
    bd.AddShape(sd);
    bd.position.Set(200, 200);

    body = physics_world.world.CreateBody(bd);
    return body;
  }
});