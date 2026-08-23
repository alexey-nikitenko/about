// Load header and footer
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // Re-initialize Lucide icons after loading
        if (window.lucide) {
            lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
        
        // Re-initialize mobile menu after header loads
        if (elementId === 'header-placeholder') {
            initMobileMenu();
        }
        
        // Update year in footer
        if (elementId === 'footer-placeholder') {
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
