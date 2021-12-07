// Variables
let navbarHeight = document.getElementById("navbar").offsetTop;
let toggleButton = document.querySelector('.hamburger')
let navBarState = document.querySelector(".navlinks")
var timeout;


// Sticky Navbar
document.addEventListener('scroll',()=>{
    if (window.pageYOffset>=navbarHeight) {
        navbar.classList.add("fixed")
        toggleButton.style.top = "1rem";
    } else {
        navbar.classList.remove("fixed");
        toggleButton.style.top = "5.5rem";
    }
    
});


// Toggle between navbar displays
toggleButton.addEventListener('click',()=>{
    navBarState.classList.toggle('active')
    toggleButton.classList.toggle('close')
})


// Form validation
document.getElementById('sub').addEventListener('click', function(e){

    e.preventDefault();

    if(document.getElementById('name').value.length === 0 || document.getElementById('msg').value.length === 0){
            document.getElementById("sent").innerHTML = "Input fields missing!";
            clearTimeout(timeout);
              timeout = setTimeout(function() {
                document.getElementById("sent").innerHTML = "";
        }, 1000);

    }

    else{
        document.getElementById('name').value = '';
        document.getElementById('msg').value = '';
         document.getElementById("sent").innerHTML = "Feedback Sent!";
        
         clearTimeout(timeout);
          timeout = setTimeout(function() {
            document.getElementById("sent").innerHTML = "";
        }, 1000);
    }

});