// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or respect OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
    document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
  } else {
    htmlElement.classList.remove('dark');
    document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    // Update icons
    document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden');
    document.getElementById('theme-toggle-light-icon').classList.toggle('hidden');
    
    // Save preference to localStorage
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
  });

  // Initialize AlpineJS components
  if (typeof Alpine !== 'undefined') {
    Alpine.start();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white/90', 'dark:bg-gray-900/90', 'backdrop-blur-sm', 'shadow-sm');
      } else {
        header.classList.remove('bg-white/90', 'dark:bg-gray-900/90', 'backdrop-blur-sm', 'shadow-sm');
      }
    });
  }

  // Mobile menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
    
    // Close menu when clicking on a menu item
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});
