const btn = document.getElementById("submit");
btn.addEventListener("click", volume_sphere);
function volume_sphere() {
  //Write your code here
  const rad = document.getElementById("radius");
  const vol = document.getElementById("volume");
  let r = Number(rad.value);
  console.log(r);
  let totalVol = (4 / 3) * 3.14 * r * r * r;
  console.log(totalVol);
  vol.value = totalVol;
  console.log(vol.value);
//   vol.innerText = vol.value;
  // alert(vol.innerText)
}

