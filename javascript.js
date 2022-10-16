window.onscroll = function() {headerMove()};

var header = document.getElementById("headerID");
var headerStay = header.offsetTop;

function headerMove() {
    if (window.pageYOffset > headerStay) {
        header.classList.add("headerStay");
    }
    else {
        header.classList.remove("headerStay");
    }
}