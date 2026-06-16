document.addEventListener('DOMContentLoaded', () => {
  initializeEnterpriseHeader();
});

function initializeEnterpriseHeader() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const dropdownTriggerLink = navMenu.querySelector('.has-dropdown > .nav-link');

  // 1. Core Hamburger Flyout Drawer Toggle Logic
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hamburgerBtn.classList.toggle('active-toggle-state');
      navMenu.classList.toggle('active-menu-drawer');
      
      // Prevents body scrolling while full screen navigation drawer is focused
      if (navMenu.classList.contains('active-menu-drawer')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    });
  }

  // 2. Mobile Accordion Dropdown Switch Logic Tracker
  if (dropdownTriggerLink) {
    dropdownTriggerLink.addEventListener('click', (e) => {
      // Execute only if viewport matches mobile breakpoint guidelines
      if (window.innerWidth <= 768) {
        e.preventDefault();
        
        const parentNavItem = dropdownTriggerLink.closest('.nav-item');
        const dynamicIcon = dropdownTriggerLink.querySelector('.dropdown-icon');
        
        if (parentNavItem) {
          parentNavItem.classList.toggle('mobile-dropdown-expanded');
          
          // Smooth rotation mapping path for the custom dropdown cross marker line
          if (parentNavItem.classList.contains('mobile-dropdown-expanded')) {
            dynamicIcon.style.transform = 'rotate(-135deg) translateY(2px)';
            dynamicIcon.style.borderColor = 'var(--accent-magenta)';
          } else {
            dynamicIcon.style.transform = 'rotate(45deg) translateY(-2px)';
            dynamicIcon.style.borderColor = 'var(--text-muted)';
          }
        }
      }
    });
  }
}