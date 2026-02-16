document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DATE GENERATOR
    const dateElement = document.getElementById('date-display');
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);

    // 2. LOADER ANIMATION
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        // Remove from DOM after fade out to allow clicking
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1800); // Loader visible for 1.8 seconds

    // 3. ACCORDION LOGIC (Exclusive Open)
    const accordions = document.querySelectorAll('.acc-item');

    accordions.forEach(acc => {
        const header = acc.querySelector('.acc-header');
        
        header.addEventListener('click', () => {
            const body = acc.querySelector('.acc-body');
            
            // Check if this item is currently open
            const isOpen = acc.classList.contains('active');

            // Close ALL accordions first
            accordions.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.acc-body').style.maxHeight = null;
            });

            // If it wasn't open before, open it now
            if (!isOpen) {
                acc.classList.add('active');
                // Use scrollHeight for smooth animation of dynamic content
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Optional: Change the button icon temporarily to show success
        alert("Email address copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}