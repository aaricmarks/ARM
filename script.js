// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formValues);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const element = document.querySelector(this.getAttribute('href'));
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener for header shadow
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
