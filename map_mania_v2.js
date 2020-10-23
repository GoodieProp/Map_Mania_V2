var backpackingTripPlaces = [
  {content:'<strong>#1: Zurich, Switzlerland <strong>', coordinates:{lat:47.373878,lng:8.545094}, iconImagePath:"flag.png"},
  {content:'<strong>#2: Stuttgart, Germany <strong>', coordinates:{lat:48.783333,lng:9.183333}, iconImagePath:"flag.png"},
  {content:'#3. Munich, Germany', coordinates:{lat:48.137154,lng:11.576124}, iconImagePath:"flag.png"},
  {content:'#4. Dortmund, Germany', coordinates:{lat:51.514244,lng:	7.468429}, iconImagePath:"flag.png"},
  {content:'#5. Amsterdam, Netherlands', coordinates:{lat:52.377956,lng:4.897070}, iconImagePath:"flag.png"},
  {content:'#6. Bruges, Belgium', coordinates:{lat:51.204605,lng:3.224090}, iconImagePath:"flag.png"},
  {content:'#7. Paris, France', coordinates:{lat:48.864716,lng:2.349014}, iconImagePath:"flag.png"},
  {content:'#8. Marseille, France', coordinates:{lat:43.296398,lng:5.370000}, iconImagePath:"flag.png"},
  {content:'#9. Barcelona, Spain', coordinates:{lat:41.390205,lng:2.154007}, iconImagePath:"flag.png"},
  {content:'#10. Gignac, France', coordinates:{lat:43.652,lng:3.5509}, iconImagePath:"flag.png"},
  {content:'#11. Nice, France', coordinates:{lat:43.675819,lng:7.289429}, iconImagePath:"flag.png"},
  {content:'#12. Monaco, Monte Carlo', coordinates:{lat:43.740070,lng:7.426644}, iconImagePath:"flag.png"},
  {content:'#13. Pisa, Italy', coordinates:{lat:43.716667,lng:10.400000}, iconImagePath:"flag.png"},
  {content:'#14. Milan, Italy', coordinates:{lat:45.464664,lng:9.188540}, iconImagePath:"flag.png"},
  {content:'#15. Venice, Italy', coordinates:{lat:45.438759,lng:12.327145}, iconImagePath:"flag.png"},
  {content:'#16. Riva Del Garda, Italy', coordinates:{lat:45.88577,lng:10.84117}, iconImagePath:"flag.png"}
]

function initGS() {
  window.alert("Welcome to Xavier's Map Mania! \n\nClick on Getting Started for the instructions.");
}

var currentPlaceIndex = backpackingTripPlaces.length-1;
var currentPlace = backpackingTripPlaces[currentPlaceIndex];
var score = 0;
var hint = "";

function initMap() {
console.log('Map Mania V2 - Starting up...');

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.9487456, lng: 7.451123 },
    zoom: 10,
  });

  google.maps.event.addListener(map, 'idle', function() {
    updateGame()
});

  SetScore(score);
  SetHint("One of the most beautiful cities in Italy. It is by a lake.");

}

function updateGame() {
  var zoomLevel = map.getZoom();
  console.log("Zoom level: " + zoomLevel);
  var inBounds = false;

  if (map.getBounds().contains(currentPlace.coordinates)) {
    inBounds = true;
    console.log("You are inbounds!");
  }

  if ((zoomLevel >= 10) && (inBounds)) {
    console.log("You found it! Now for the next location!");
    addMarker(currentPlace);
    SetScore(score += 5);
    nextLocation();
  }
}

function nextLocation() {
  currentPlaceIndex--;
  currentPlace = backpackingTripPlaces[currentPlaceIndex];

  // If statement to display the hints at the right time
  if (currentPlace == backpackingTripPlaces[14]) {
    SetHint("The city is basically a maze in italy.")
  }
  else if (currentPlace == backpackingTripPlaces[13]) {
    SetHint("was a very good soccer team in italy.")
  }
  else if (currentPlace == backpackingTripPlaces[12]) {
    SetHint("Titling tower!")
  }
  else if (currentPlace == backpackingTripPlaces[11]) {
    SetHint("Only the rich of the rich live here. Luxury everywhere. Formula 1 races")
  }
  else if (currentPlace == backpackingTripPlaces[10]) {
    SetHint("It is a nice place.")
  }
  else if (currentPlace == backpackingTripPlaces[9]) {
    SetHint("Rhymes with cognac")
  }
  else if (currentPlace == backpackingTripPlaces[8]) {
    SetHint("Messiiiii Goaaaaal!")
  }
  else if (currentPlace == backpackingTripPlaces[7]) {
    SetHint("Southside of France on the coast.")
  }
  else if (currentPlace == backpackingTripPlaces[6]) {
    SetHint("You would definitely want to bring your significant other.")
  }
  else if (currentPlace == backpackingTripPlaces[5]) {
    SetHint("In Bruges - the Movie")
  }
  else if (currentPlace == backpackingTripPlaces[4]) {
    SetHint("420 friendly everywhere.")
  }
  else if (currentPlace == backpackingTripPlaces[3]) {
    SetHint("Rhymes with Dartmouth. It's in Germany.")
  }
  else if (currentPlace == backpackingTripPlaces[2]) {
    SetHint("Heard Oktoberfest is awesome.")
  }
  else if (currentPlace == backpackingTripPlaces[1]) {
    SetHint("A little northwest of Munich.")
  }
  else if (currentPlace == backpackingTripPlaces[0]) {
    SetHint("The banks of this country rull essentially everything.")
  }
  else if (currentPlace == backpackingTripPlaces[-1]) {
    window.alert("Congratulations you have won!");
  }
}

function addMarker(markerC) {
  // initializing marker variable
  var marker = new google.maps.Marker(
    {position:markerC.coordinates, map:map}
  );
  
  if (markerC.iconImagePath) {
      marker.setIcon(markerC.iconImagePath);
  }

  if (markerC.content) {
      var infoWindow = new google.maps.InfoWindow({"content":markerC.content});
      marker.addListener("click", function() { infoWindow.open(map, marker) });
  }
}

function SetScore(score) {
  document.getElementById("score-id").value = score;  
}

function SetHint(hint) {
  document.getElementById("hint-id").value = hint;  
}

function cheat() {
  window.alert("Guess you want to be a cheater huh. Congrats cheater, you won..");
}
