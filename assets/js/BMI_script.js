let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

function showValWeight(newVal) {
  weightSlider.value=newVal;
};

function showValHeight(newVal) {
  heightSlider.value=newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = (document.bmiForm.realheight.value)/100;
  let realbmi = (weight)/Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = "";
  realbmiOutput.innerHTML = " " + roundedBmi;
  if (roundedBmi < 18.5) {
    messageOutput.innerHTML = "<br>Gain some weight, you're underweight!";
  }
  if (roundedBmi >= 18.5 && roundedBmi <= 26) {
    messageOutput.innerHTML = "<br>Good job!";
  }
  if (roundedBmi > 26 && roundedBmi  <= 30) {
    messageOutput.innerHTML = "<br>Loose some weight, you're overweight!";
  }
  if (roundedBmi > 30) {
    messageOutput.innerHTML = "<br>Loose some weight, you have obesity!";
  }
}