	
<!--dialog: login-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
        <h4 class="modal-title" id="myModalLabel">Sign In</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button id="btn_validateSignIn" type="button" class="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</div>


<!--dialog: add marker-->
<div class="modal fade" id="AddMarker" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Add a launch site</h4>
      </div>
      <div class="modal-body">
				<div class="panel panel-success">
					<div class="panel-heading">
						<h3 class="panel-title">From your current location</h3>
					</div>
					<div class="panel-body">
						<p>Add a new marker based on you current position as specified by you device's GPS. </p>
						<button id="btn_fromcurrentposition" type="button" class="btn btn-default" data-dismiss="modal">Select</button>
					</div>
				</div>

				<div class="panel panel panel-info">
					<div class="panel-heading">
						<h3 class="panel-title">By selection a location</h3>
					</div>
					<div class="panel-body">
						<p>Tap or click the screen to add new marker at that position and then move the marker to exactly where you want ite. </p>
						<button id="btn_selectposition" type="button" class="btn btn-default" data-dismiss="modal">Select</button>
					</div>
				</div>
      <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--dialog: marker details-->
	<div class="modal fade" id="savemarker" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
        <h4 class="modal-title" id="myModalLabel">Save Marker Information</h4></div>
      <div class="modal-body">
        ...
      </div>

    </div>
  </div>
</div>




<!--dialog: marker details-->
<div class="modal fade" id="marker" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">


    </div>
  </div>
</div>




<script>
	$('#btn_fromcurrentposition').bind("click",this,function(){
		console.log("Button, Add marker from current position");
		Mymap.marker.add.fromcurrentlocation();
		return false;
	});
	
		$('#btn_selectposition').bind("click",this,function(){
		console.log("Button, Add marker from current position");
		Mymap.marker.add.selectposition();
		return false;
	});


	
	
	
		$('#btn_show_marker_details').bind("click",this,function(){
		console.log("Button, save marker");
		Mymap.marker.showdetails();
		return false;
	});
$</script>