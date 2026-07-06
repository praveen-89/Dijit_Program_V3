// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Icons init
    if (window.lucide) {
        lucide.createIcons();
    }

    // Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-sidebar');
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('mobile-open');
            } else {
                sidebar.classList.toggle('collapsed');
            }
        });
    }

    // Submenu Toggle
    const navItemsWithSubmenu = document.querySelectorAll('.nav-item.has-submenu');
    navItemsWithSubmenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Close others
            navItemsWithSubmenu.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            item.classList.toggle('open');
        });
    });

    // Dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('[data-toggle="dropdown"]');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Close others
                dropdowns.forEach(other => {
                    if (other !== dropdown) other.classList.remove('show');
                });
                dropdown.classList.toggle('show');
            });
        }
    });

    // Click outside to close dropdowns
    window.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });

    // Command Palette (Ctrl + K)
    const commandPaletteOverlay = document.getElementById('commandPaletteOverlay');
    const cpInput = document.querySelector('.cp-input');
    const cpClose = document.querySelector('.cp-close');
    const globalSearchInput = document.querySelector('.global-search input');

    const openCommandPalette = () => {
        if(commandPaletteOverlay) {
            commandPaletteOverlay.classList.add('open');
            setTimeout(() => cpInput && cpInput.focus(), 100);
        }
    };

    const closeCommandPalette = () => {
        if(commandPaletteOverlay) {
            commandPaletteOverlay.classList.remove('open');
            if(cpInput) cpInput.value = '';
        }
    };

    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openCommandPalette();
        }
        if (e.key === 'Escape') {
            closeCommandPalette();
        }
    });

    if (globalSearchInput) {
        globalSearchInput.addEventListener('focus', (e) => {
            e.target.blur(); // Prevent mobile keyboard and focus on actual modal
            openCommandPalette();
        });
    }

    if (commandPaletteOverlay) {
        commandPaletteOverlay.addEventListener('click', (e) => {
            if (e.target === commandPaletteOverlay) {
                closeCommandPalette();
            }
        });
    }

    // Modal logic
    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    const modals = document.querySelectorAll('.modal-overlay');
    const modalCloses = document.querySelectorAll('[data-dismiss="modal"]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(trigger.dataset.target);
            if (target) {
                target.classList.add('open');
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal-overlay').classList.remove('open');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    });
});
