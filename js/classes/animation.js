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
// BPAD include function ::: it is defined before animation.js in index.php
var dpad = new Bpad();
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
// I wrote this to take the logic out of the function that calls this one --simplify?? MainLoop() function
var checkAnimation = function(){
  if (keys.indexOf('left') >= 0)
  {
    return 'left';
  }
  if (keys.indexOf('right') >= 0)
  {
    return 'right';
  }
  if (keys.indexOf('up') >= 0)
  {
    return 'up';
  }
  if (keys.indexOf('down') >= 0)
  {
    return 'down';
  }
  if (keys.indexOf('space') >= 0)
  {
    return 'space';
  }
};
var spritesheet = new SpriteSheet('img/anime.gif', 65, 96);
var walkRight = new Animation(spritesheet, 10, 7, 10);
var walkLeft = new Animation(spritesheet, 10, 19, 22);
var walkDown = new Animation(spritesheet, 10, 1, 4);
var walkUp = new Animation(spritesheet, 10, 13, 16);
var standingDown = new Animation(spritesheet, 10, 0, 0);
var spaceBar = new Animation(spritesheet, 10, 43, 44);
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
    ctx.clearRect(0, 0, 550, 300);
    
    x = x -.5;
    walkLeft.update();
    walkLeft.draw(x,y);
  };
  this.rightHandler = function(){
    ctx.clearRect(0, 0, 550, 300);
    
    x = x +.5;
    walkRight.update();
    walkRight.draw(x,y);
  };
  this.upHandler = function(){
    ctx.clearRect(0, 0, 550, 300);
    
    y = y -.5;
    walkUp.update();
    walkUp.draw(x,y);
  };  
  this.downHandler = function(){
    ctx.clearRect(0, 0, 550, 300);
    
    y = y +.5;
    walkDown.update();
    walkDown.draw(x,y);
  };

  this.standingDownHandler = function(){
    ctx.clearRect(0, 0, 550, 300);
    
    standingDown.draw(x,y);
  };
  this.spaceHandler = function(){
    ctx.clearRect(0, 0, 550, 300);
    
    spaceBar.update();
    spaceBar.draw(x,y);
  };
  this.mainLoop = function() {
    var check = checkAnimation();
    switch (check)
    {
      case 'left': this.leftHandler();
      break;
      case 'right' : this.rightHandler();
      break;
      case 'down' : this.downHandler();
      break;
      case 'up' : this.upHandler();
      break;
      case 'space' : this.spaceHandler();
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
       if (keys.indexOf('up') < 0) {
      keys.push('up');
      }
    }
    else if (e.keyCode == '40') {
  if (keys.indexOf('down') < 0) {
      keys.push('down');
      }
    }
    else if (e.keyCode == '37') {
      if (keys.indexOf('left') < 0) {
      keys.push('left');
      }
    }
    else if (e.keyCode == '39') {
       if (keys.indexOf('right') < 0) {
      keys.push('right');
      }
    }
    else if (e.keyCode == '32'){
      if (keys.indexOf('space') < 0) {
        keys.push('space');
      }
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
  else if (e.keyCode == '32'){
    var index = keys.indexOf('space');
    keys.splice(index, 1);
  }
};
