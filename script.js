// function arrowHandlerRight() {
//     const widthWindow=window.innerWidth;
//     const scrollableElement = document.getElementsByClassName("slider")[0];
//     console.log(scrollableElement);
    
//     scrollableElement.scrollBy({ left:widthWindow>1250? 800:400, behavior: "smooth" })

// }

// function arrowHandlerLeft() {
//     const widthWindow=window.innerWidth;
//     const scrollableElement = document.getElementsByClassName("slider")[0];
//     console.log(scrollableElement);
//     scrollableElement.scrollBy({ left:widthWindow>1250? -800:-400, behavior: "smooth" });    
// }

// function toggleAccordion(index) {
//     const content = document.querySelectorAll('.accordion-content')[index];

//     const closeBtn = document.querySelectorAll('.close')[index];
//     const openBtn = document.querySelectorAll('.open')[index];
//     if (content.style.display === "block") {
//         closeBtn.style.display="none";
//         openBtn.style.display="block";
       
//         content.style.display = "none";
//     } else {
//         closeBtn.style.display="block";
//         openBtn.style.display="none";
//         content.style.display = "block";
//     }
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerIcon = document.getElementById('hamburger-icon');
//     const navContainer = document.getElementById('nav-container');
//     const headerButtonsContainer = document.getElementById('header-buttons-container');

//     hamburgerIcon.addEventListener('click', function() {
//       navContainer.classList.toggle('show');
//     });
//   });



function arrowHandlerRight() {
    // Get the current width of the window
    const widthWindow = window.innerWidth;

    // Get the scrollable element with the class name "slider"
    const scrollableElement = document.getElementsByClassName("slider")[0];
    console.log(scrollableElement);
    
    // Scroll the element to the right by 800px if the window width is greater than 1250px,
    // otherwise scroll by 400px. Use smooth scrolling behavior.
    scrollableElement.scrollBy({ left: widthWindow > 1250 ? 800 : 400, behavior: "smooth" });
}

function arrowHandlerLeft() {
    // Get the current width of the window
    const widthWindow = window.innerWidth;

    // Get the scrollable element with the class name "slider"
    const scrollableElement = document.getElementsByClassName("slider")[0];
    console.log(scrollableElement);

    // Scroll the element to the left by 800px if the window width is greater than 1250px,
    // otherwise scroll by 400px. Use smooth scrolling behavior.
    scrollableElement.scrollBy({ left: widthWindow > 1250 ? -800 : -400, behavior: "smooth" });
}

function toggleAccordion(index) {
    // Get the content element and buttons for the accordion at the specified index
    const content = document.querySelectorAll('.accordion-content')[index];
    const closeBtn = document.querySelectorAll('.close')[index];
    const openBtn = document.querySelectorAll('.open')[index];

    // Toggle the display of the accordion content and buttons
    if (content.style.display === "block") {
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
        content.style.display = "none";
    } else {
        closeBtn.style.display = "block";
        openBtn.style.display = "none";
        content.style.display = "block";
    }
}

// Add event listener to execute the code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger icon, navigation container, and header buttons container
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navContainer = document.getElementById('nav-container');
    const headerButtonsContainer = document.getElementById('header-buttons-container');

    // Toggle the 'show' class on the navigation container when the hamburger icon is clicked
    hamburgerIcon.addEventListener('click', function() {
        navContainer.classList.toggle('show');
    });
});
