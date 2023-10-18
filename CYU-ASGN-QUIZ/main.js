//Star Wars Quiz

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //HTML Variables
  let correct = +0;
  let correctspan = document.getElementById("score");
  //Get Answers
  let ans1 = document.getElementById("one").value.toLowerCase();
  let ans2 = document.getElementById("two").value.toLowerCase();
  let ans3 = document.getElementById("three").value.toLowerCase();
  let ans4 = document.getElementById("four").value.toLowerCase();
  if (
    ans1 === "figrin dan and the modal nodes" ||
    ans1 === "figrin d'an and the modal nodes" ||
    ans1 === "figrin d'an" ||
    ans1 === "figrin dan"
  ) {
    document.getElementById("asr1").innerHTML = "Correct!";
    document.getElementById("one").style.backgroundColor = "green";
    correct++;
    correctspan.innerHTML = correct + "/4";
  } else {
    document.getElementById("asr1").innerHTML = "Incorrect.";
    document.getElementById("one").style.backgroundColor = "red";
  }
  if (ans2 === "corrupted kyber crystals") {
    document.getElementById("asr2").innerHTML = "Correct!";
    document.getElementById("two").style.backgroundColor = "green";
    correct++;
    correctspan.innerHTML = correct + "/4";
  } else {
    document.getElementById("asr2").innerHTML = "Incorrect.";
    document.getElementById("two").style.backgroundColor = "red";
  }
  if (ans3 === "fn-2187") {
    document.getElementById("asr3").innerHTML = "Correct!";
    document.getElementById("three").style.backgroundColor = "green";
    correct++;
    correctspan.innerHTML = correct + "/4";
  } else {
    document.getElementById("asr3").innerHTML = "Incorrect.";
    document.getElementById("three").style.backgroundColor = "red";
  }
  if (ans4 === "thrawn" || ans4 === "grand admiral thrawn") {
    document.getElementById("asr4").innerHTML = "Correct!";
    document.getElementById("four").style.backgroundColor = "green";
    correct++;
    correctspan.innerHTML = correct + "/4";
  } else {
    document.getElementById("asr4").innerHTML = "Incorrect.";
    document.getElementById("four").style.backgroundColor = "red";
  }
  if (correct === 0) {
    document.getElementById("score").innerHTML = "0/4";
    document.getElementById("output").innerHTML = "0%";
  } else {
    console.log(correct);
    let score = (correct / 4) * 100;
    console.log(score);
    document.getElementById("output").innerHTML = `${score}%`;
  }
  if (score === 50 || score === 25) {
    document.getElementById("diagnosis").innerHTML =
      "You're just a regular old moisture farmer living on the outskirts of Mos Eisley";
  } else if (score === 75) {
    document.getElementById("diagnosis").innerHTML =
      "You're in the galactic senate, working your hardest to bring about change in the galaxy.";
  } else if (score === 100) {
    document.getElementById("diagnosis").innerHTML =
      "Wow! Your midicholorian count is so high! You must be a Jedi!";
  }
}
