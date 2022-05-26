let wylosujLiczbe = Math.floor(Math.random() * 100) + 1;

function play() {
  let liczba = document.getElementById("liczba").value;
  let message = "";
  if (liczba > wylosujLiczbe) {
    message = "Your number is too high.";
  } else if (liczba < wylosujLiczbe) {
    message = "Your number is too low.";
  } else if (liczba = wylosujLiczbe){
    message = `Congratulations! ${wylosujLiczbe} is the correct number!`;
  }
  document.querySelector(".przycisk").innerHTML = message;
}
