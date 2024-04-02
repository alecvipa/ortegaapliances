function navB() {
    if (window.scrollY == 0) {
        //user scrolled to the top of the page
        document.getElementById("navBars").style.backgroundColor = "";
    }
    else {

        document.getElementById("navBars").style.backgroundColor = "#d55845";
    }

}
// Get the modal 1
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Get the modal Sec
var modalSecond = document.getElementById("myModalSec");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgSecond = document.getElementById("myImgSec");
var modalImgSecond = document.getElementById("imgSec");
var captionTextSecond = document.getElementById("captionSec");
imgSecond.onclick = function () {
    modalSecond.style.display = "block";
    modalImgSecond.src = this.src;
    captionTextSecond.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSec")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalSecond.style.display = "none";
}


// Get the modal Third
var modalThird = document.getElementById("myModalThird");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgThird = document.getElementById("myImgThird");
var modalImgThird = document.getElementById("imgThird");
var captionTextThird = document.getElementById("captionThird");
imgThird.onclick = function () {
    modalThird.style.display = "block";
    modalImgThird.src = this.src;
    captionTextThird.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeThird")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalThird.style.display = "none";
}

// Get the modal Four
var modalFour = document.getElementById("myModalFour");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgFour = document.getElementById("myImgFour");
var modalImgFour = document.getElementById("imgFour");
var captionTextFour = document.getElementById("captionFour");
imgFour.onclick = function () {
    modalFour.style.display = "block";
    modalImgFour.src = this.src;
    captionTextFour.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeFour")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalFour.style.display = "none";
}

// Get the modal Fifth
var modalFifth = document.getElementById("myModalFifth");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgFifth = document.getElementById("myImgFifth");
var modalImgFifth = document.getElementById("imgFifth");
var captionTextFifth = document.getElementById("captionFifth");
imgFifth.onclick = function () {
    modalFifth.style.display = "block";
    modalImgFifth.src = this.src;
    captionTextFifth.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeFifth")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalFifth.style.display = "none";
}


// Get the modal Sixth
var modalSixth = document.getElementById("myModalSixth");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgSixth = document.getElementById("myImgSixth");
var modalImgSixth = document.getElementById("imgSixth");
var captionTextSixth = document.getElementById("captionSixth");
imgSixth.onclick = function () {
    modalSixth.style.display = "block";
    modalImgSixth.src = this.src;
    captionTextSixth.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSixth")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalSixth.style.display = "none";
}

// Get the modal Seventh
var modalSeventh = document.getElementById("myModalSeventh");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgSeventh = document.getElementById("myImgSeventh");
var modalImgSeventh = document.getElementById("imgSeventh");
var captionTextSeventh = document.getElementById("captionSeventh");
imgSeventh.onclick = function () {
    modalSeventh.style.display = "block";
    modalImgSeventh.src = this.src;
    captionTextSeventh.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSeventh")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalSeventh.style.display = "none";
}


