const navMenuBtn = document.getElementById('menuToggleBtn');
const menuList = document.getElementById('menuList');
const listItem = document.querySelectorAll('.list-item');
const modeToggle = document.getElementById('displaySetting');
const body = document.getElementById('page');
const scrollTopBtn = document.getElementById('scrollTop');
const nav = document.getElementById('nav');

// Toggle the menu button and list on button click
navMenuBtn.addEventListener('click', () => {
    toggleClass();
})

// Toggle on list item click if menu is open
listItem.forEach(item => {
    item.addEventListener('click', () => {
        if (navMenuBtn.classList.contains('show-toggle-btn')) {
            toggleClass();
        }
    })
})

// Toggle the menu button and list
function toggleClass() {
    navMenuBtn.classList.toggle('show-toggle-btn');
    menuList.classList.toggle('show-menu-list');
    body.classList.toggle('fixed-body');
}

// Toggle between light and dark mode
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})

// Show or hide scroll button based on window height
window.addEventListener('scroll', checkWindowHeight);

function checkWindowHeight() {
    // Toggles scroll to top btn
    if (window.scrollY > 250) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }

    // Switch the navigation background
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#FFFEFC";
        nav.style.boxShadow = "0 2px 5px #b6b6b6";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
    }
}

// Smoothly scroll to top of page
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Scroll browser to the top when browser refreshes
if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// Initialized and add the map
function initMap() {
    // Location of restaurant city
    const restaurantCity = {
        lat: 19.0760,
        lng: 72.8777
    };

    // Location of restaurant
    const streetDhaba = {
        lat: 19.1095,
        lng: 72.8241
    }

    // Map options
    const options = {
        zoom: 8,
        center: restaurantCity
    }

    // Map centered at Street Dhaba 
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Marker positioned at Street Dhaba
    let marker = new google.maps.Marker({
        position: streetDhaba,
        map,
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', toggleBounce);
}

// Toggle the animation between a bounce and no animation
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}