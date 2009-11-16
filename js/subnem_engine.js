function initializeSubnemEngine(){
   var c = E.canvas(500, 500);          // create a new canvas element
   var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
   canvas.fill = [255,255,255,0.8];     // set the Canvas background to 0.8 opacity white
   canvas.clear = false;                // show the previous frame behind the current one
   var rect = new Rectangle(100, 100);  // create a CAKE [Rectangle] object
   rect.x = 250;                        // move the Rectangle to (250, 250)
   rect.y = 250;
   rect.fill = 'green';                 // fill the Rectangle with green color
   // rotate the Rectangle on every frame
   rect.addFrameListener(function(t) {
     this.rotation = ((t / 3000) % 1) * Math.PI * 2 ;
   });
   canvas.append(rect);                 // append the Rectangle to the Canvas
   canvas.append(player_ship);
   document.body.appendChild(c);        // append the canvas element to document body
}