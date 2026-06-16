document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const dropdownToggle = document.querySelector('.has-dropdown > .nav-link');
  const dropdownParent = document.querySelector('.has-dropdown');

  // Multi-Device Drawer Control
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Adaptive Dropdown Interaction Engine
  dropdownToggle.addEventListener('click', (e) => {
    // Execute logic only under mobile breakpoint rules
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownParent.classList.toggle('mobile-dropdown-active');

      // Dynamic inline rotation handle for mobile layout arrow
      const icon = dropdownToggle.querySelector('.dropdown-icon');
      if (dropdownParent.classList.contains('mobile-dropdown-active')) {
        icon.style.transform = 'rotate(-135deg) translateY(-2px)';
      } else {
        icon.style.transform = 'rotate(45deg) translateY(-2px)';
      }
    }
  });

  // Global Context Cleanup on Window Rescale
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
      dropdownParent.classList.remove('mobile-dropdown-active');
      const icon = dropdownToggle.querySelector('.dropdown-icon');
      if (icon) icon.style.transform = '';
    }
  });
});










// Drop these stylesheet links into your global HTML <head> layer:
// <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

// Drop this script link right before your closing </body> tag layer:
// <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the Animate On Scroll (AOS) Engine with high-performance parameters
  AOS.init({
    // Global settings:
    disable: 'phone',        // Performance choice: disable animations on small mobile screens for fluid scrolling
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis via data-aos-* attributes:
    offset: 120,             // Change delay triggering points (in pixels)
    delay: 0,                // Values from 0 to 3000, with step 50ms
    duration: 800,           // Values from 0 to 3000, with step 50ms
    easing: 'ease-out-cubic', // Global default easing style for premium micro-movements
    once: true,              // Crucial choice: true means animation happens once while scrolling down, avoiding messy re-triggers
    mirror: false,           // Whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger animation
  });
});










document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.tech-nav-btn');
  const tabContents = document.querySelectorAll('.tech-tab-content');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTabId = button.getAttribute('data-target');

      // Clear layout classes across button links
      navButtons.forEach(btn => btn.classList.remove('active'));
      // Hide alternative display layer blocks
      tabContents.forEach(content => content.classList.remove('active'));

      // Activate chosen control node
      button.classList.add('active');
      // Mount designated information tab panel
      document.getElementById(targetTabId).classList.add('active');
    });
  });
});









document.addEventListener('DOMContentLoaded', () => {
  const faqNodes = document.querySelectorAll('.faq-node');

  faqNodes.forEach(node => {
    const trigger = node.querySelector('.faq-trigger');
    const panel = node.querySelector('.faq-panel');

    trigger.addEventListener('click', () => {
      const isAlreadyActive = node.classList.contains('active');

      // 1. Reset all alternative active modules to ensure single entry visibility
      faqNodes.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-panel').style.maxHeight = null;
      });

      // 2. Toggle current selection parameters
      if (!isAlreadyActive) {
        node.classList.add('active');
        // Calculate the exact scrollable padding footprint height of internal children dynamically
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});