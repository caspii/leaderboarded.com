/**
 * Leaderboarded - Main JavaScript File
 * Contains all interactive functionality for the website
 */

// ====================
// FAQ Toggle Functionality
// ====================

/**
 * Initialize FAQ accordion functionality
 * Allows users to expand/collapse FAQ items
 */
function initializeFAQToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length === 0) return; // Exit if no FAQ elements found
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current answer
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// ====================
// Dropdown Menu Enhancement
// ====================

/**
 * Enhance dropdown menus with keyboard accessibility
 * Note: Basic functionality works with CSS hover, this adds keyboard support
 */
function enhanceDropdownMenus() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (dropdowns.length === 0) return; // Exit if no dropdown elements found
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;
        
        // Add keyboard accessibility
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = menu.style.display === 'block';
            menu.style.display = isOpen ? 'none' : 'block';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                menu.style.display = 'none';
            }
        });
        
        // Add keyboard navigation
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });
    });
}

// ====================
// Smooth Scrolling
// ====================

/**
 * Enable smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or a dropdown toggle
            if (href === '#' || this.classList.contains('dropdown-toggle')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ====================
// Analytics Helper Functions
// ====================

/**
 * Track button clicks for analytics
 * Works with existing Fathom and Ahrefs analytics
 */
function trackButtonClick(buttonText, destination) {
    // This function can be expanded to send custom events
    // Currently, the analytics scripts handle basic tracking
    console.log(`Button clicked: ${buttonText} -> ${destination}`);
}

/**
 * Initialize button tracking
 */
function initializeButtonTracking() {
    const ctaButtons = document.querySelectorAll('.btn-keepthescore, .btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const destination = this.getAttribute('href');
            trackButtonClick(buttonText, destination);
        });
    });
}

// ====================
// Page Load Optimizations
// ====================

/**
 * Lazy load images for better performance
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// ====================
// Mobile Menu Toggle
// ====================

/**
 * Initialize mobile menu functionality (if implemented in future)
 */
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuToggle || !navLinks) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// ====================
// Template Gallery Functions
// ====================

/**
 * Initialize template filtering functionality
 * Allows users to filter templates by category
 */
function initializeTemplateFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.template-card');
    
    if (filterButtons.length === 0 || templateCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter templates
            const category = this.getAttribute('data-category');
            
            templateCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initialize preview modal functionality
 * Shows template previews in a modal window
 */
function initializePreviewModal() {
    const previewButtons = document.querySelectorAll('.preview-btn');
    const modal = document.getElementById('previewModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (!modal || previewButtons.length === 0) return;
    
    previewButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
}

// ====================
// Initialize All Functions
// ====================

/**
 * Initialize all JavaScript functionality when DOM is ready
 */
function initializeApp() {
    initializeFAQToggle();
    enhanceDropdownMenus();
    initializeSmoothScrolling();
    initializeButtonTracking();
    initializeLazyLoading();
    initializeMobileMenu();
    initializeTemplateFilters();
    initializePreviewModal();
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}

// ====================
// Utility Functions
// ====================

/**
 * Debounce function to limit how often a function can be called
 * Useful for scroll and resize events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for potential use in other scripts
window.leaderboarded = {
    initializeFAQToggle,
    enhanceDropdownMenus,
    initializeSmoothScrolling,
    trackButtonClick,
    initializeTemplateFilters,
    initializePreviewModal,
    debounce,
    isInViewport
};