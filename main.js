const popular = document.getElementsByClassName("popular")[0];

const prev = popular.getElementsByClassName("prev");
const next = popular.getElementsByClassName("next");
const slider = popular.getElementsByClassName("slider");
const sliderItem = popular.getElementsByClassName("sliderItem");
 
document.getElementById('checkin').valueAsDate = new Date();
document.getElementById('checkout').valueAsDate = new Date();