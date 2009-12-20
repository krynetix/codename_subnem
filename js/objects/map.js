/* Each maps are measured in pixels. Everything in the map have an exact coordinate, centered.

For some purpose, it may be helpful to use a more general coordinate system to refer to regions of space. We called them quadrants, which are 1000 by 1000 pixels in size. They are each located in a grid. For example, an object in [3023,4442] is said to be in quadrant 3,4.

The quadrant system is likely to be used for large scale objects, such as planets, carrier starships, and various large bodies.

Setting the map size meant the number of quadrants by hieght and width.
*/
Map = Klass(
{
  x: null,
  y: null,
  entities: null,
  initialize: function(width,height)
  {
    x = width * 1000;
    y = height * 1000;
    entities = [];
  },
  add: function(entity)
  {
    entities.push(entity);
  },
  create_object: function(select, x ,y)
  {
    switch (select)
    {
     case 1: this.add(new Asteroid(x,y));
     case 2: this.add(new Deck(x,y));
    }
  },
  getEntities: function()
  {
    logger.info("return entites");
    return entities;
  },
  logAnObject: function(n)
  {
    logger.info("x: " + entities[n].image.x);
    logger.info("y: " + entities[n].image.y);
  }
});
