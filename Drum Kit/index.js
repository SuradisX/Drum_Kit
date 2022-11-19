document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    console.log(name);
    switch (name) {
      case "w":
        document.getElementById("w").style.color = "black";
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        document.getElementById("a").style.color = "black";
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "s":
        document.getElementById("s").style.color = "black";
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "d":
        document.getElementById("d").style.color = "black";
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        document.getElementById("j").style.color = "black";
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "k":
        document.getElementById("k").style.color = "black";
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "l":
        document.getElementById("l").style.color = "black";
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      default:
        alert("กดปุ่มผิด");
        break;
    }
  },
  false
);
