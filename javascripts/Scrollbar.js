window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("NavBar").className = "NavScrolled w3-bar pentagonite-dark w3-card";
    } else {
        document.getElementById("NavBar").className = "w3-bar pentagonite-dark";
    }
}