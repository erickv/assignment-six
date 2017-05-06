$(document).ready(function(){

$("select").change(changeCity)

// creates the UI
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
var index;
for(index = 0; index < cities.length; index = index+1){
  console.log(cities[index]);
  $("select").append("<option>" + cities[index]+"</option>");
}



	// user submits a city name
	function changeCity(){
		event.preventDefault();
		var city = $("select").val();


		 if (city == "New York" || city == "NYC" || city =="New York City") {
    $("body").attr("class", "nyc");
  }

// }
	// if any of these cities is selected nyc, sf, la, austin, sydney
	// background image appears
	//if user doesnt match the city and alert please enter a valid city
	//

  else if (city == "SF") {
    $("body").attr("class", "sf");
  }
  else if (city == "LAX") {
    $("body").attr("class", "la");
  }
  else if (city == "ATX") {
    $("body").attr("class", "austin");
  }
  else if (city == "SYD") {
    $("body").attr("class", "sydney");
  }

else {
	alert("We currently don't have images for this city. Check back later!");}

}

});
