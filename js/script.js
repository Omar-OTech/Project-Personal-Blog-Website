document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

// This Button Is Used To Scroll To Top
const Top = document.getElementById('Top');
//On Clicking, The Function Will Run 
Top.addEventListener("click", function() {
//After Clicking On The Button, The Page Will Be In The Top = (0) 
	window.scrollTo({
		top: 0,
		left: 0,
//It Keeps The Scroll Smooth 
		behavior: "smooth" 
	});
});
//Add Event (scroll)
document.addEventListener("scroll", Active_Class);
