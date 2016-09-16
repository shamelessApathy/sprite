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
var standingDown = new Animation(spritesheet, 10, 0, 0);
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
  this.leftHandler = function(){
    console.log('left is being pressed');
    x = x -.5;
    y = 50;
    walkLeft.update();
    walkLeft.draw(x,y);
  };
  this.standingDownHandler = function(){
    console.log('default is running')
    x = 50;
    y = 50;
    standingDown.draw(x,y);
  };
  this.mainLoop = function() {
    var check = checkAnimation();
    switch (check)
    {
      case 'left': this.leftHandler();
      break;
      case 'right' : console.log('right is being pressed');
      break;
      default : this.standingDownHandler();
    }
   //ctx.clearRect(0, 0, 550, 300);
    // y = y - 1;
   // walkUp.update();
  //  walkUp.draw(x,y);
   


};
  this.initialize();
};
var game = new Game();
 

document.onkeydown = pushKey;

function pushKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        keys.push('up');
    }
    else if (e.keyCode == '40') {
        keys.push('down');
        // down arrow
    }
    else if (e.keyCode == '37') {
        keys.push('left');
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
        keys.push('right');
    }

};
document.onkeyup = removeKey;
function removeKey(e) {
  if (e.keyCode == '38'){
    var index = keys.indexOf('up');
   keys.splice(index, 1);
  }
  else if (e.keyCode == '40'){
    var index = keys.indexOf('down');
   keys.splice(index, 1);
  }
  else if (e.keyCode == '37'){
    var index = keys.indexOf('left');
    keys.splice(index, 1);
  }
  else if (e.keyCode == '39'){
    var index = keys.indexOf('right');
    keys.splice(index, 1);
  }
};
