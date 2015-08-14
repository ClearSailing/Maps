<?php
require_once("php/initialize.php");

?>
<!DOCTYPE html >
<!--<head>-->
<head>
	<meta id="viewport" name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0" />
	<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
	<title>Welcome to Paddle sports</title>

	<link rel="icon" href="favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>

	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css">

	<!--<link href="css/jquery.mobile.theme-1.4.5.min.css" rel="stylesheet" type="text/css">-->

	<!--<link href="css/putins.css" rel="stylesheet" type="text/css">-->

		<link href="css/maps.css" rel="stylesheet" type="text/css">

	<!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>-->

	<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript" src="js/google/markerclusterer.js"></script>
	<script type="text/javascript" src="js/google/infobox.js"></script>

	 <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
	<!--<script src="//code.jquery.com/jquery-1.10.2.js"></script>-->
	<!--<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>-->

	<script src="js/jquery/jquery-1.11.1.min.js"></script>
	<!--<script src="js/jquery/jquery.mobile-1.4.5.min.js"></script>-->




	<!-- HTML5 shim for IE backwards compatibility -->
			<!--[if lt IE 9]>
				<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]-->


</head>

<body onLoad="">
	<nav id="navbar" class="navbar navbar-default">
<?php include("includes/navbar.php"); ?>
</nav>

<div class='wrapper'>
  <div id="map"></div>
	<div class="icon-center-map"> </div>	
</div>
<?php include("includes/dialogs.php"); ?>

<script src="js/bootstrap.min.js"></script>

<script src="js/bootstrap.min.js"></script>

<script src="js/object.user.js" type="text/javascript"></script>
	<script src="js/initialise.js" type="text/javascript"></script>
	<script src="js/object.maps.js" type="text/javascript"></script>

</body>

</html>