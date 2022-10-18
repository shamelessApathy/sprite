

Bpad = function() 
{

   this.initialize = function()
   {
    // This is a way to prevent the dialog box in google chromes device spoofer from popping up on a long touch event 
  window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};
// this makes the bpad container movable anywhere on the screen for better use
    this.draggable = document.getElementById('dragtab');
    this.draggable.addEventListener('touchmove', function(event) {
    
    var touch = event.targetTouches[0];
    //bpad container
    this.bpadContainer = document.getElementsByClassName('bpad-container')[0];
    // Place element where the finger is
    this.bpadContainer.style.left = touch.pageX-25 + 'px';
    this.bpadContainer.style.top = touch.pageY-25 + 'px';
    event.preventDefault();
  }, false);
  // this makes the bpad buttons container draggable
    this.draggableButtons = document.getElementById('button-dragtab');
    this.draggableButtons.addEventListener('touchmove', function(event) {
    
    var touch = event.targetTouches[0];
    //bpad container
    this.buttonContainer = document.getElementsByClassName('bpad-buttons-container')[0];
    // Place element where the finger is
    this.buttonContainer.style.left = touch.pageX-25 + 'px';
    this.buttonContainer.style.top = touch.pageY-25 + 'px';
    event.preventDefault();
  }, false);
  this.clearOpacity = function(){
    this.upButton.css({'opacity':'0'});
    this.rightButton.css({'opacity':'0'});
    this.downButton.css({'opacity':'0'});
    this.leftButton.css({'opacity':'0'});
    this.aButton.css({'opacity':'1'});
    this.bButton.css({'opacity':'1'});
  };
  this.isNewTargetDpadButton = function(target){
    var id = target.id;
    var button = ['bpad-up', 'bpad-right', 'bpad-down', 'bpad-left'];
   
    this.clearOpacity();
    switch (id)
    {
      case 'bpad-right': this.startHandler('right', this.rightButton)
      break;
      case 'bpad-down': this.startHandler('down', this.downButton)
      break;
      case 'bpad-left': this.startHandler('left', this.leftButton)
      break;
      case 'bpad-up': this.startHandler('up', this.upButton)
      break;

    }

  }
  this.buttonsDown = [];
      this.upButton = jQuery('#bpad-up');
      this.rightButton = jQuery('#bpad-right');
      this.downButton = jQuery('#bpad-down');
      this.leftButton = jQuery('#bpad-left');
      this.aButton = jQuery('#button-a');
      this.bButton = jQuery('#button-b');
      this.document = jQuery(document);

// Touch Start Handlers  ---- Starts the startHandler 
// function that pushes to the buttonsDown array and also adds opacity over the dpad button being pressed
      this.upButton.on('touchstart', function(){
        this.startHandler('up', this.upButton);
      }.bind(this));
      this.rightButton.on('touchstart', function(){
        
        this.startHandler('right', this.rightButton);
      }.bind(this));
      this.downButton.on('touchstart', function(){
        this.startHandler('down', this.downButton);
      }.bind(this));
      this.leftButton.on('touchstart', function(){
        this.startHandler('left', this.leftButton);
      }.bind(this));
      this.aButton.on('touchstart', function(){
        this.startHandler('space', this.aButton);
      }.bind(this));
      this.bButton.on('touchstart', function(){
        this.startHandler('b-button', this.bButton);
      }.bind(this));
      // Touch End Handlers
      this.upButton.on('touchend', function(){
        this.endHandler('up', this.upButton);
      }.bind(this));
      this.rightButton.on('touchend', function(){
        this.endHandler('right', this.rightButton);
      }.bind(this));
      this.downButton.on('touchend', function(){
        this.endHandler('down', this.downButton);
      }.bind(this));
      this.leftButton.on('touchend', function(){
        this.endHandler('left', this.leftButton);
      }.bind(this));
      this.aButton.on('touchend', function(){
        this.endHandler('space', this.aButton);
      }.bind(this));
      this.bButton.on('touchend', function(){
        this.endHandler('b-button', this.bButton);
      }.bind(this));
// Mouse Down and Mouse up event handlers
      this.upButton.on('mousedown', function(){
        this.startHandler('up', this.upButton);
      }.bind(this));
      this.rightButton.on('mousedown', function(){
        
        this.startHandler('right', this.rightButton);
      }.bind(this));
      this.downButton.on('mousedown', function(){
        this.startHandler('down', this.downButton);
      }.bind(this));
      this.leftButton.on('mousedown', function(){
        this.startHandler('left', this.leftButton);
      }.bind(this));
      this.aButton.on('mousedown', function(){
        this.startHandler('space', this.aButton);
      }.bind(this));
      this.bButton.on('mousedown', function(){
        this.startHandler('b-button', this.bButton);
      }.bind(this));
      // Touch End Handlers
      this.upButton.on('mouseup', function(){
        this.endHandler('up', this.upButton);
      }.bind(this));
      this.rightButton.on('mouseup', function(){
        this.endHandler('right', this.rightButton);
      }.bind(this));
      this.downButton.on('mouseup', function(){
        this.endHandler('down', this.downButton);
      }.bind(this));
      this.leftButton.on('mouseup', function(){
        this.endHandler('left', this.leftButton);
      }.bind(this));
      this.aButton.on('mouseup', function(){
        this.endHandler('space', this.aButton);
      }.bind(this));
      this.bButton.on('mouseup', function(){
        this.endHandler('b-button', this.bButton);
      }.bind(this));
      this.document.on("mousemove", function(){
        this.clearKeys();
      }.bind(this));
// touchMove and the like down here, trying to write it so that you can keep your finger on the screen
// and still be able to move to another direction on the dpad
      this.upButton.on('touchmove', function(e){
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('up', this.upButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
      this.rightButton.on('touchmove', function(e){
        
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('right', this.rightButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
      this.downButton.on('touchmove', function(e){
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('down', this.downButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
      this.leftButton.on('touchmove', function(e){
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('left', this.leftButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
   };
   /*this.opacity(button)
   {
    switch (button)
    {
      case 'up': this.upButton.attr
    }
   }*/
   this.isDown = function(button)
   {
       return this.buttonsDown.indexOf(button);
   };
   this.startHandler = function(button, buttonVar)
   {  
      buttonVar.css({'opacity':'0.8'});  
      keys.push(button);
   };

   this.endHandler = function(button, buttonVar)
   {
          this.clearOpacity();
          var index = keys.indexOf(button);
          keys.splice(index, 1);
   };
   this.clearKeys = function(){
    this.clearOpacity();
    keys = [];
   }


   this.initialize();
};

