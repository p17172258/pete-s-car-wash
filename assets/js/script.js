let sideBar = document.getElementById("mySidebar")
let myContainer = document.getElementById("my-container")

function openNav() {
    sideBar.style.width = "250px";
    myContainer.style.marginLeft = "250px";
}

function closeNav() {
    sideBar.style.width = "0";
    myContainer.style.marginLeft = "0";
}