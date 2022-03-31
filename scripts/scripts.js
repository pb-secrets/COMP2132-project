let counter = 1;
const limit = 34;
const minimum = 1
const delay = 2500;

let   currentPic        = document.getElementById('image-container');
const startButton       = document.getElementById("start");
const stopButton        = document.getElementById('stop');
const popup             = document.getElementById('pop-up');
const closePopup        = document.getElementById('close-popup');
const test              = document.getElementById('image-container');
const startStopButtons  = document.querySelectorAll("bike-buttons");


let popupHandler = false;
let bikeSpinning;
let animationHandler;
let timeoutHandler;


startButton.addEventListener('click', function(){
    if(!bikeSpinning){
    animationHandler =  requestAnimationFrame(changeImages );
    bikeSpinning = true;
    popupHandler = true;
    } 
});

stopButton.addEventListener('click', function(){
    if (bikeSpinning){
    clearTimeout(timeoutHandler);
    cancelAnimationFrame(changeImages);
    bikeSpinning = false;
    } else {
        popupHandler = true;
    }
});

closePopup.addEventListener('click', function(){
    popup.style.display = 'none';
});

function changeImages(){
    if (counter < limit){    
        counter++;
        currentPic.innerHTML = `<img src="product-images/bike-${counter}.jpg" alt="bike animation">`
        timeoutHandler = setTimeout(function(){
            animationHandler  =   requestAnimationFrame(changeImages);
        }, 100);
    } if (counter == limit) {
        counter = minimum;
}
}

setTimeout(function(){
    if(!popupHandler){
        popup.classList.toggle("fade");      
    }
}, delay);



    
