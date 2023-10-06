const btn = document.getElementById("submit");
btn.addEventListener("click", volume_sphere);
function volume_sphere() {
  //Write your code here
	const r = document.getElementById("radius");
	const v = document.getElementById("volume");
	let radius = parseInt(r.value);
	let result = (4/3)*3.14*Math.pow(radius,3);
	v.value = result;
  }

