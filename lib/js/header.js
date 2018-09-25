function expandNavBar() {
    var links = document.getElementById("navigation-bar-links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}