document.getElementById("checkin").valueAsDate = new Date();
document.getElementById("checkout").valueAsDate = new Date();

function closeMobileMenu() {
  document.getElementById("mobileMenuContainer").style.display = "none";
}

function openMobileMenu() {
    document.getElementById("mobileMenuContainer").style.display = "block";
}
