function navB() {
    if (window.scrollY == 0) {
        //user scrolled to the top of the page
        document.getElementById("navBars").style.backgroundColor = "";
    }
    else {

        document.getElementById("navBars").style.backgroundColor = "#d55845";
    }

}
