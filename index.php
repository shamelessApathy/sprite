<head>
<!--<meta name="viewport" content="width=device-width,initial-scale=1">-->
<meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no" /> 
<link href='css/styles.css' rel='stylesheet' type='text/css'/>
<link href='bpad/bpad.css' rel='stylesheet' type='text/css'/>
<link rel='manifest' href='js/manifest.json'/>
</head>
<body>
<div id='viewport'>
<canvas id='canvas' width='550' height='300'></canvas></div>

<div class='bpad-container'>
	<div id='dragtab'><div id='dragalert'><span>&#8595</span> Use to Move D-Pad</div></div>
	<img src='bpad/dpadclear.png' class='dpadSprite'/>
	<div class='prevent'></div>
	<div class='bpad-direction' id='bpad-left'></div>
	<div class='bpad-direction' id='bpad-up'></div>
	<div class='bpad-direction' id='bpad-right'></div>
	<div class='bpad-direction' id='bpad-down'></div>
</div>
<div class='bpad-buttons-container'>
	<div id='button-dragtab'></div>
	<div id='button-a'>A</div>
	<div id='button-b'>B</div>
</div>

<center>
<form>
<input type="button" id='fullScreenButton' onClick="fullScreen()" value="Open Full Screen Window">
<input type='button' id='exitFullScreenButton' onClick='exitFullScreen()' value='Exit Full Screen Window'>
</form>
</center>
</body>
<script src ='js/jquery-3.1.0.js'></script>
<script src ='bpad/bpad.js'></script>
<script src='js/classes/animation.js'></script>
<script>
<!--

var elem = document.documentElement;
var fullScreenButton = document.getElementById('fullScreenButton');
var exitFullScreenButton = document.getElementById('exitFullScreenButton');
var fullScreen = function(element)   {
  if(elem.requestFullScreen) {
    elem.requestFullScreen();
  } else if(elem.webkitRequestFullScreen ) {
    elem.webkitRequestFullScreen();
  } else if(elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if(elem.msRequestFullscreen){
    elem.msRequestFullscreen();
    };
fullScreenButton.setAttribute('style','display:none');
exitFullScreenButton.setAttribute('style','display:block');
};
var exitFullScreen = function(element){
	console.log('exitFullScreen() function running');
	  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
  	console.log('webvkit');
    document.webkitExitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullscreen();
  } else if(document.msExitFullscreen){
    document.msExitFullscreen();
    };
exitFullScreenButton.setAttribute('style','display:none');
fullScreenButton.setAttribute('style','display:block');
};

//-->
</script>
