//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
let data;

async function init(){
//Challenge 2: Get the data using the link and analyze it


//Challenge 3: Add the necessary code to fetch the data here
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function search(){
	let build = "";
	let query = document.getElementById("search").value
	for (let i = 0; i < data.length; i++) {
		if (data[i].contributing_factor_vehicle_1) {
			//console.log(data[i].contributing_factor_vehicle_1)
		if (query.toLowerCase() == data[i].contributing_factor_vehicle_1.toLowerCase()) {
			
		// if (query == data[i].contributing_factor_vehicle_1) {
			let date = new Date(data[i].crash_date)
			let time = data[i].crash_time
			console.log(date)
			console.log(time)
			build += `
			<div class="card">
			<h1>${data[i].contributing_factor_vehicle_1}</h1>
			<h2>${date.toLocaleDateString()} ${time}</h2>
			<p>Number of Deaths: ${data[i].number_of_persons_killed}</p>
			<p>Number of Injuries: ${data[i].number_of_persons_injured}</p>
			<p>Vehicle: ${data[i].vehicle_type_code1}</p>
			<p>Street Name: ${data[i].on_street_name}</p>
			
			</div>
			
			`
		}
		} else {
			continue;
		}
	}
	
	let output = document.getElementById("output");
	output.innerHTML = build;
}

