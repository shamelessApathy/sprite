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
<script>
<!--
//function fullwin(){
//window.open("/","bfs","fullscreen,scrollbars")
window.scrollTo(0,1);
//}
//-->
</script>

<center>
<form>
<input type="button" onClick="fullwin()" value="Open Full Screen Window">
</form>
</center>
</body>
<script src ='js/jquery-3.1.0.js'></script>
<script src ='bpad/bpad.js'></script>
<script src='js/classes/animation.js'></script>
