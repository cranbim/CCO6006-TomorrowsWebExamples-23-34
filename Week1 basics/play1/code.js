let res=document.getElementById("result");
res.innerText="Something changed"
let counter=0;
let countInterval;


function getLocation() {
  if (navigator.geolocation) {
    countInterval=setInterval(()=>console.log(counter++/10),100);
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    res.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  res.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  clearInterval(countInterval);
}