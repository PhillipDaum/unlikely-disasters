const poundTheEarth = []

/// today in YYYY-MM-DD
const dateHowTheyLikeIt =  new Date().toISOString().split("T")[0];
const correctURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateHowTheyLikeIt}&end_date=${dateHowTheyLikeIt}&api_key=YFd2rMGO2R7KJipZ2lXdYqMP2dsmq3pWKEOz9NXQ`;

const dateHowTheyLikeItWithQuotes = `"${dateHowTheyLikeIt}"`


const asteroidData = async () => {
    const response = await fetch(correctURL);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
	console.log(myJson, "myJson")
	// maybe I just need to put an output here!? 
  }
  console.log(dateHowTheyLikeItWithQuotes)
  console.log(asteroidData)

  asteroidData()
// for (item of asteroidData.near_earth_objects[dateHowTheyLikeItWithQuotes]) {
// 	if (item.is_potentially_hazardous_asteroid === true) {
// 		poundTheEarth.push(item);
// 	}
// }

function astroidSpeed () {
	let identifier = this.id;
	let travelSpeed =
		asteroidData.near_earth_objects[dateHowTheyLikeItWithQuotes][identifier]
			.close_approach_data[0].relative_velocity.miles_per_hour;
	this.innerHTML = `traveling @ ${Math.ceil(travelSpeed).toLocaleString()} mph`;
};

function unAstroidSpeed () {
	let identifier = this.id;
	let originalInfo = asteroidData.near_earth_objects[dateHowTheyLikeItWithQuotes][identifier].name
	this.innerHTML = `${originalInfo}`;
};

function willItHitEarth () {
	let identifier = this.id;
	let howMuchMiss = asteroidData.near_earth_objects[dateHowTheyLikeItWithQuotes][identifier].close_approach_data[0].miss_distance.miles;;
	this.innerHTML = `expected to miss Earth by:${Math.ceil(howMuchMiss).toLocaleString()} miles`;
};


function badAstroids() {
	for (let i = 0; i < poundTheEarth.length; i++) {
		let badAst = document.createElement("li");
		badAst.innerHTML = poundTheEarth[i]["name"];
		badAst.className = "astroid";
		badAst.id = i;
		document.querySelector(".badAstList").appendChild(badAst);
	}
	document.querySelectorAll(".astroid").forEach((astroid) => {
		astroid.addEventListener("mouseover", astroidSpeed);
		astroid.addEventListener("mouseout", unAstroidSpeed);
		astroid.addEventListener("click", willItHitEarth);
	});
}
badAstroids();


// <i class="fa-solid fa-user-astronaut"></i>
// <i class="fa-solid fa-earth-americas"></i>
//<i class="fa-solid fa-explosion"></i>
// <i class="fa-solid fa-sun"></i>
// <i class="fa-solid fa-certificate"></i> this is the asteroid
