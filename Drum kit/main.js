let numOfBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let key = this.innerHTML;
    makeSound(key);
    // addAnimation(key);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  //   addAnimation(event.key);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      let tom1 = new Audio("assets/sound/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("assets/sound/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("assets/sound/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("assets/sound/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("assets/sound/snare.mp3");
      snare.play();
      break;
    case "k":
      let kick = new Audio("assets/sound/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let crash = new Audio("assets/sound/crash.mp3");
      crash.play();
      break;

    default:
      console.log("nothing clicked");
      break;
  }
};

// customize animation

// function addAnimation(key) {
//   let anm = document.querySelectorAll("." + key);
//   anm.classList.add("pressed");
// }
