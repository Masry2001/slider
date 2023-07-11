// get slider items | Array.from()

var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
var slidesCount = sliderImages.length;

// set cuurent slide 
var currentSlide = 1;

// slider number element
var slideNumberElement = document.getElementById("slide-number");

// prev & next buttons
var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")

// handle click on prev & next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide

// create the main ul element
var paginationElement = document.createElement("ul");
// set id on created ul element
paginationElement.setAttribute("id", "pagination-ul");

// create list items based on sliders count
for (var i = 1; i <= slidesCount; i++) {
    // created list items
    var paginationItem = document.createElement("li");
    // set custom attribute to list items
    paginationItem.setAttribute("data-index", i);
    // set list item content
    var number = document.createTextNode(i);
    paginationItem.appendChild(number);
    // appent list items to the ul elemnt
    paginationElement.appendChild(paginationItem);
};

// add the ul element to the page 
document.getElementById("indicators").appendChild(paginationElement);

// get the new created ul
var paginationUl = document.getElementById("pagination-ul");

// get pagination items
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop over all paginationBullets
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}
// trigger the checker function
theChecker();

//  next slide function
function nextSlide() {
    if (!nextButton.classList.contains("disabled")) {
        currentSlide++;
        theChecker();
    }
}
//prev slide function 
function prevSlide() {
    if (!prevButton.classList.contains("disabled")) {
        currentSlide--;
        theChecker();
    }
}

// checker function
function theChecker() {
    // set slide number
    slideNumberElement.textContent = "slide #" + (currentSlide) + " of " + (slidesCount);

    // trigger remove all active classes function
    removeAllActive();

    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    // set active on current pagination item
    paginationUl.children[currentSlide - 1].classList.add("active");

    // check if the current slide is the first 
    if (currentSlide == 1)
        // add disable class on prev button
        prevButton.classList.add("disabled");
    else
        // remove disable class from prev button
        prevButton.classList.remove("disabled");

    // check if the current slide is the last
    if (currentSlide == slidesCount)
        // add disable class from next button
        nextButton.classList.add("disabled");
    else
        // remove disable class from next button
        nextButton.classList.remove("disabled");
}

// remove all active classes from images and pagination bullets function
function removeAllActive() {
    // loop over images
    sliderImages.forEach((img) => {
        img.classList.remove("active");
    });

    // loop over pagination
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove("active");
    });
};

