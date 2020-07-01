function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  var original = imgs.src.replace("images","bigimg");
  expandImg.src = original;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablist = document.getElementById("had").children;
  for (i = 0; i < tablist.length; i++) {
    tablist[i].classList.remove("active");
  }
  evt.currentTarget.className += " active";
  document.getElementById(cityName).style.display = "block";

}

document.getElementById("defaultOpen").click();