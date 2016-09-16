// Request Animation Frame function() for each browser
var windowAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.onRequestAnimationFrame || window.msRequestAnimationFrame || null;
var ctx = document.getElementById('canvas').getContext('2d');
function SpriteSheet(path, frameWidth, frameHeight) {
  this.image = new Image();
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;
 
  // calculate the number of frames in a row after the image loads
  var self = this;
  this.image.onload = function() {
    self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
  };
 
  this.image.src = path;
};

// Animation function, params
function Animation(spritesheet, frameSpeed, startFrame, endFrame) {
 
  var animationSequence = [];  // array holding the order of the animation
  var currentFrame = 0;        // the current frame to draw
  var counter = 0;             // keep track of frame rate
 
  // create the sequence of frame numbers for the animation
  for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
    animationSequence.push(frameNumber);
 
  // Update the animation
  this.update = function() {
 
    // update to the next frame if it is time
    if (counter == (frameSpeed - 1))
      currentFrame = (currentFrame + 1) % animationSequence.length;
 
    // update the counter
    counter = (counter + 1) % frameSpeed;
  };
 
  // draw the current frame
  this.draw = function(x, y) {
    // get the row and col of the frame
    var row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
    var col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);
 
    ctx.drawImage(
      spritesheet.image,
      col * spritesheet.frameWidth, row * spritesheet.frameHeight,
      spritesheet.frameWidth, spritesheet.frameHeight,
      x, y,
      spritesheet.frameWidth, spritesheet.frameHeight);
  };
};
var checkAnimation = function(){
  if (keys.indexOf('left') >= 0)
  {
    console.log('returning left');
    console.log(keys);
    return 'left';
  }
  if (keys.indexOf('right') >= 0)
  {
    return 'right';
  }
};
var spritesheet = new SpriteSheet('img/anime.gif', 65, 96);
var walkRight = new Animation(spritesheet, 10, 7, 10);
var walkLeft = new Animation(spritesheet, 10, 19, 22);
var walkDown = new Animation(spritesheet, 10, 1, 4);
var walkUp = new Animation(spritesheet, 10, 13, 16);
var keys = [];
var Game = function(){
    var x = 400;
  var y = 200;
  this.initialize = function(){
    this.runLoop();
  };
  this.runLoop = function()
  {
    if (windowAnimFrame)
    {
      this.mainLoop();
      windowAnimFrame(this.runLoop.bind(this));
    } else {
      var fps = 1000 / 60; // 60 fps
      setInterval(this.mainLoop, fps);
    }
  };

  this.mainLoop = function() {
    var check = checkAnimation();
    switch (check)
    {
      case 'left': console.log('left is being pressed');
      break;
      case 'right' : console.log('right is being pressed');
      break;
      default : console.log('default is running');
    }
   ctx.clearRect(0, 0, 550, 300);
     y = y - 1;
    walkUp.update();
    walkUp.draw(x,y);
   


};
  this.initialize();
};
var game = new Game();
 

 
/*ocument.addEventListener("keydown", function(event) {
  if (event.which === '37')
  {
    console.log('pushing left');
    keys.push('left');
  }
  if (event.which === '39')
  {
    keys.push('right');
  }
});
console.log(keys.indexOf('left') < 0);
*/