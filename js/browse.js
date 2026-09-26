/* browse.js */
document.addEventListener('DOMContentLoaded', () => {
    const items = Array.isArray(MATERIALS) ? MATERIALS : (MATERIALS['general'] || Object.values(MATERIALS)[0] || []);

    const countEl = document.getElementById('grid-count');
    if (countEl) countEl.textContent = `${items.length} Subjects`;

    const grid = document.getElementById('material-grid');

    function renderGrid(animate = false) {
        const favs = getFavorites();
        const pinned = getPinned();

        // Sort items so pinned items are first
        const sortedItems = [...items].sort((a, b) => {
            const aPinned = pinned.includes(a.id);
            const bPinned = pinned.includes(b.id);
            if (aPinned && !bPinned) return -1;
            if (!aPinned && bPinned) return 1;
            return 0;
        });

        grid.innerHTML = sortedItems.map(item => materialCardHTML(item, favs.includes(item.id), pinned.includes(item.id))).join('');
        bindActionButtons(grid);

        if (animate && typeof gsap !== 'undefined') {
            gsap.fromTo('.material-card',
                { y: 50, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out', delay: 0.1 }
            );
        }
    }

    renderGrid(true);

    // Re-render when pinning or favorites change to keep UI in sync
    window.addEventListener('so-pin-changed', () => {
        renderGrid(false);
    });

    window.addEventListener('so-fav-changed', () => {
        renderGrid(false);
    });

    window.addEventListener('storage', (e) => {
        if (e.key === 'soFavorites' || e.key === 'soPinned') {
            renderGrid(false);
        }
    });
});

