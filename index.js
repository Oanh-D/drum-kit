// document.querySelector("button").addEventListener("click", function(){
//     alert("got clicked");
// })

var buttonList = document.getElementsByClassName("drum");
var x = buttonList.length;

for (var i = 0; i < x; i++){
    buttonList[i].addEventListener("click", function(){
       var letter = this.innerHTML;
       keyChoice(letter);
       buttonAnimation (letter);
    })
}

document.addEventListener("keydown", function(event){
    keyChoice(event.key);
    buttonAnimation (event.key);
})

function keyChoice (key) {
    switch (key){
        case "w" :
            var sound = new Audio ('tom-1.mp3');
            sound.play();
            break;
        case "a" :
            var sound = new Audio ('tom-2.mp3');
            sound.play();
            break;
        case "s" :
            var sound = new Audio ('tom-3.mp3');
            sound.play();
            break;
        case "d" :
            var sound = new Audio ('tom-4.mp3');
            sound.play();
            break;
        case "j":
            var sound = new Audio ('snare.mp3');
            sound.play();
            break;
        case "k" :
            var sound = new Audio ('crash.mp3');
            sound.play();
            break;
        case "l":
            var sound = new Audio ('kick-bass.mp3');
            sound.play();
            break;
        default:
            return;
    }
}

function buttonAnimation (keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
