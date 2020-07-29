    let locationBtn = document.getElementById("mylocation");
	header = document.querySelector("header");

	let para = document.getElementById("location");
	let button = document.querySelector("button");
	let mapLink = document.getElementById("map-link");

	mapLink.href = "";
	mapLink.textContent = "";

	function getLocation() {
		if (!navigator.geolocation) {
			para.textContent = "Geolocation is not supported by your browser";
		} else {
			para.textContent = "Please wait ...Locating…";
			navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
		}
	}

	function showPosition(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		para.textContent = "";
		mapLink.textContent = "Check out the map!";
		mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		mapLink.textContent = "View The Map!";
	}

	function errorMsg() {
		para.textContent = "Sorry, something went wrong!";
	}

	button.onclick = getLocation;
