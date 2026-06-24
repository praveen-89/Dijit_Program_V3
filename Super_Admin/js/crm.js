// crm.js — Sales CRM Kanban logic (Phase 3)

document.addEventListener('DOMContentLoaded', () => {
    console.log('[DIJIT Super Admin] CRM module loaded.');

    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-column');

    let draggedCard = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', () => {
            draggedCard = card;
            setTimeout(() => {
                card.style.display = 'none';
            }, 0);
        });

        card.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedCard.style.display = 'block';
                draggedCard = null;
                updateCounts();
            }, 0);
        });
    });

    columns.forEach(column => {
        column.addEventListener('dragover', e => {
            e.preventDefault();
        });

        column.addEventListener('dragenter', e => {
            e.preventDefault();
            column.style.background = '#E2E8F0'; // light hover effect
        });

        column.addEventListener('dragleave', () => {
            column.style.background = '#F1F5F9';
        });

        column.addEventListener('drop', () => {
            column.style.background = '#F1F5F9';
            if (draggedCard) {
                // Determine logic for styles when moving to Closed Won or Lost
                if (column.dataset.stage === 'won') {
                    draggedCard.style.borderLeft = '3px solid var(--success)';
                } else if (column.dataset.stage === 'lost') {
                    draggedCard.style.borderLeft = '3px solid var(--danger)';
                } else {
                    draggedCard.style.borderLeft = 'none';
                }
                column.appendChild(draggedCard);
            }
        });
    });

    function updateCounts() {
        columns.forEach(column => {
            const count = column.querySelectorAll('.kanban-card').length;
            const badge = column.querySelector('.kanban-column-header .badge');
            if(badge) badge.textContent = count;
        });
    }
});
