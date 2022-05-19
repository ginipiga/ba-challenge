const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
const button = document.querySelector("button");
const backcolor = document.querySelector("body");
function colorChange(){
    const colors1 = colors[Math.floor(Math.random()*colors.length)];
    const colors2 = colors[Math.floor(Math.random()*colors.length)];
    backcolor.style.backgroundImage = `linear-gradient(90deg, ${colors1}, ${colors2})`;
}
backcolor.addEventListener("click", colorChange);