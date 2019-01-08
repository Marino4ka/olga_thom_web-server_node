var imagesPathsArr = ["images/widgets/chick1.png", "images/widgets/swill.png", "images/widgets/chick2.jpg", "images/widgets/appointment.jpg",];
var imagesTitle = ["Gesichtspflege", "Hand und Fusspflege", "Uber mich", "Termin"];
var linkList = ["/gesichtspflege", "/hand_und_fusspflege", "/uber_mich", "/termin"];
const slidersLength = 3;
var currentSlides = [];

function createSliderOnLoad () {
    for (var i = 0; i < slidersLength; i++) {
      result.appendChild(createSliderItem(i));
    }
    return;
};

next.onclick = function next () {
       result.appendChild(createSliderItem(slidersLength));
       shiftArrayLeft(imagesPathsArr);
       shiftArrayLeft(imagesTitle);
       result.removeChild(currentSlides.shift()); // go left -> delete first 
    };

prev.onclick = function prev () {
       currentSlides.unshift(document.createElement('div')); // go right -> insert first
       shiftArrayRight(imagesPathsArr);
       shiftArrayRight(imagesTitle);
       createSliderItem(0);
       result.insertBefore(currentSlides[0], result.firstChild);
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

function createSliderItem(index) {
    // create wrapper div
    currentSlides[index] = document.createElement("div");
    currentSlides[index].classList.add("grid_item");
    
    // create link img
    var linkImg = document.createElement("a");
    linkImg.href = linkList[index];
    // create img div
    var sliderImg = document.createElement("div");
    sliderImg.classList.add("grid_img");
    sliderImg.style.backgroundImage = "url(" + (imagesPathsArr[index]) + ")";
    
    // place img div inside link
    linkImg.appendChild(sliderImg)
    
    // create img title div
    var sliderImgTitle = document.createElement("div");
    sliderImgTitle.classList.add("grid_title");
    
    // create link
    var link = document.createElement("a");
    link.classList.add("slider_text")
    link.href = linkList[index];
    link.innerHTML = imagesTitle[index];
    
    // place link inside div
    sliderImgTitle.appendChild(link);
    
    // place link img and title div inside wrapper div
    currentSlides[index].appendChild(linkImg);
    currentSlides[index].appendChild(sliderImgTitle);
    return currentSlides[index];
};


window.onload = createSliderOnLoad();