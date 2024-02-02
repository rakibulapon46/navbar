// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav_toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // if(links.classList.contains('show_links')){
  //     links.classList.remove('show_links');
  // }
  // else{
  //     links.classList.add('show_links');
  // }
  links.classList.toggle("show_links");
});
