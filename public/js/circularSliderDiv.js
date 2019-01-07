var imagesPathsArr = ["images/widgets/chick1.png", "images/widgets/swill.png", "images/widgets/chick2.jpg", "images/widgets/appointment.jpg",];
// var imagesTitle = ["Gesichtspflege", "Hand und Fusspflege", "Uber mich", "Termin"];
const slidersLength = 3;
var currentSlides = [];

function createSliderOnLoad () {
    for (var i = 0; i < slidersLength; i++) {
       currentSlides[i] = document.createElement('div');
       currentSlides[i].classList.add("sliderImg");
       currentSlides[i].style.backgroundImage = "url(" + (imagesPathsArr[i]) + ")"; 
       result.appendChild(currentSlides[i]);
    }
    return;
};

next.onclick = function next () {
       currentSlides[slidersLength] = document.createElement('div');
       currentSlides[slidersLength].classList.add("sliderImg");     
       currentSlides[slidersLength].style.backgroundImage = "url(" + (imagesPathsArr[slidersLength]) + ")";
       result.appendChild(currentSlides[slidersLength]);
       shiftArrayLeft(imagesPathsArr);
       result.removeChild(currentSlides.shift());
    };

prev.onclick = function prev () {
       currentSlides.unshift(document.createElement('div'));
       currentSlides[0].classList.add("sliderImg");
       currentSlides[0].style.backgroundImage = "url(" + (imagesPathsArr[slidersLength]) + ")";
       result.insertBefore(currentSlides[0], result.firstChild);
       shiftArrayRight(imagesPathsArr);
       result.removeChild(currentSlides[slidersLength]);
    };


function shiftArrayLeft(arr) {
    var shiftedLeft = arr.shift(); 
    arr.push(shiftedLeft);
    return arr;
};


function shiftArrayRight(arr) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    return arr;
};




window.onload = createSliderOnLoad();