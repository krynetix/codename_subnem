function PhysicalObject(mass, velocity)
{
  this.mass = mass;
  this.velocity = velocity;
  this.inertia = this.calculate_inertia;
  this.direction = 0;
  //Convert polar coordinates into retangular ones
  this.convert_to_cartesian = function()
  {
    x = this.velocity * Math.cos(this.direction);
    y = this.velocity * Math.sin(this.direction);
    return {x: x, y: y}
  }
  this.calculate_inertia = function()
  {
    return this.mass * this.velocity
  }
  this.turn_left = function()
  {
    this.direction -= 10;
  }
  this.accelerate_forward = function()
  {
    this.velocity += 10;
  }
}