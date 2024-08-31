
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('nav a[href="#home"]');
    const portfolioLink = document.querySelector('nav a[href="#portfolio"]');
    
    // Portfolio link click event
    portfolioLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    });

    // Home link click event
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    });

    // Contact link click event
    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

});