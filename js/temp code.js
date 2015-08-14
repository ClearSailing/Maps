/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	addmarker: function(){
			 var point = new google.maps.LatLng(42.84013676778704, -70.92589214352985);
          var html = "<b>" + name; //+ "</b> <br/>" + address;
          //var icon = customIcons[type] || {};
          var marker = new google.maps.Marker({
            map: Mymap.xmap,
            position: point,
						draggable:true,
            icon: 'http://localhost/PaddleSports/images/marker.new.png'
            //shadow: icon.shadow
          });
          //bindInfoWindow(marker,Mymap.xmap, Mymap.infoWindow,"Drag and drop the marker to the required point<br>Finished<a href='http://www.clearsailing.net'>Finished</a>");
		//google.maps.event.trigger(marker, 'click');
		
		
		var boxText = document.createElement("div");
		boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: linen; padding: 5px;";
		boxText.innerHTML = "Drag and drop the marker to the location you want. Once the marker is in position, click finish";
		var myOptions = {
			 content: boxText
			,disableAutoPan: false
			,maxWidth: 0
			,pixelOffset: new google.maps.Size(-140, 0)
			,zIndex: null
			,boxStyle: { 
			  background: "url('tipbox.gif') no-repeat"
			  ,opacity: 0.9
			  ,width: "280px"
			 }
			,closeBoxMargin: "10px 2px 2px 2px"
			,closeBoxURL: ""
			,infoBoxClearance: new google.maps.Size(1, 1)
			,isHidden: false
			,pane: "floatPane"
			,enableEventPropagation: false
		};
		google.maps.event.addListener(marker, "click", function (e) {
			ib.open(Mymap.xmap, this);
		});
		
				var ib = new InfoBox(myOptions);
		ib.open(Mymap.xmap, marker);
}


    function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
    }

    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}


	function showPosition(position)
  {
Mymap.lat =  position.coords.latitude
alert ('x - '+Mymap.lat)
Mymap.long= position.coords.longitude;

      Mymap.xmap = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(Mymap.lat, Mymap.long),
        zoom: 10,
        mapTypeId: 'roadmap'
      });

	}
	
		

      Mymap.infoWindow = new google.maps.InfoWindow;

      // Change this depending on the name of your PHP file
      downloadUrl("./php/generate.php", function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName("marker");
				
var xx = [];

        for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
         // var address = markers[i].getAttribute("address");
          ///var type = markers[i].getAttribute("type");
          var point = new google.maps.LatLng(
              parseFloat(markers[i].getAttribute("lat")),
              parseFloat(markers[i].getAttribute("lng")));
          var html = "<b>" + name //+ "</b> <br/>" + address;
          //var icon = customIcons[type] || {};
          var marker = new google.maps.Marker({
            map: Mymap.xmap,
            position: point,
						//draggable:true
            //icon: './images/marker.new.png,
            //shadow: icon.shadow
          });xx.push(marker);


          bindInfoWindow(marker,Mymap.xmap, Mymap.infoWindow, html);
										
        }		var mcOptions = {gridSize: 30, maxZoom: 15};
var mc = new MarkerClusterer(Mymap.xmap,xx,mcOptions)	
alert (Mymap.lat)
      });
		

 <!--<nav>
            <a href="">
                <p>Home</p> 
                <!--<img src='images/home.png' />-->
            </a>
            <a href="">
                <p>Maps</p> 
                <!--<img src='images/map.png' />-->
            </a>
            <a id='add' href="#">
                <p>Add</p> 
                <!--<img src='images/add.png' />-->
            </a>
            <a href="">
                <p>Search</p> 
                <!--<img src='images/search.png' />-->
            </a>
            <a href="">
                <p>Rentals</p> 
                <!--<img src='images/rental.png' />-->
            </a>
            <a href="">
                <p>Store</p> 
                <!--<img src='images/store.png' />-->
            </a>    
            <a href="">
                <p>Login</p> 
                <!--<img src='images/login.png' />-->
            </a>

        </nav>

        <aside id ='userinfo'>
            <p>Welcome: Peter Breeze</p> 
        </aside>
    
    <aside id ='moreinfo'>
        <h1>Add</h1>
        <div class='innie'>
            <header>A single location</header>
            <div class='xx'>Once you click the 'Add Location' below a new markewr will appear in the center of the map, drag this marker to the location you want it and click 'Save'</div>
            
        </div>
        <div class='innie'>
            <header>From KML file</header>
            <div class='xx'>To add locations via a 'Google Earth' KML file, you will first need to export your places from Google Earth to KML file. You can then upload the file using the button below.
        
        If a specific location is already on the map, it will not be added again</div>
            
        </div>
        <div class='innie'>
            <header>From current location</header>
            <div class='xx'>If your device can detect you location, you can add a marker simly by clicking the button below</div>
            
        </div>