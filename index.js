var buttons = document.querySelectorAll("button").length;
for(var i=0;i<buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var key = this.innerText;
        makeSound(key);
        makeAnimation(key);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case 'w':
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case 'a':
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case 's':
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case 'd':
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
        case 'j':
            var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();
            break;
        case 'k':
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case 'l':
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
        default:
            break;
    }

}

function makeAnimation(value){
    var pressedButton = document.querySelector("."+value);
    pressedButton.classList.add("pressed");
    setTimeout(function(){
        pressedButton.classList.remove("pressed");    
    },100);
    
}