const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Toggle the nav menu when clicking the bar (open the menu)
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Close the nav menu when clicking the close button
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


var MainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img");

// Setting up the click event for each small image
smalling[0].onclick = function() {
    MainImg.src = smalling[0].src;
};

smalling[1].onclick = function() {
    MainImg.src = smalling[1].src;
};

smalling[2].onclick = function() {
    MainImg.src = smalling[2].src;
};

smalling[3].onclick = function() {
    MainImg.src = smalling[3].src;
};


