document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchBar');
    const clubCards = document.querySelectorAll('.club-card');
    const searchContainer = document.querySelector('.searchBarContainer');
    const clubsContainer = document.querySelector('.clubs');

    if (!searchInput) return;

    // 1. Create Clear ("X") Button
    const clearBtn = document.createElement('button');
    clearBtn.innerHTML = '✖';
    clearBtn.type = 'button';
    clearBtn.ariaLabel = 'Clear search';
    clearBtn.style.cssText = "background: none; border: none; cursor: pointer; color: #718096; font-size: 14px; padding: 0 8px; display: none;";
    searchContainer.appendChild(clearBtn);

    // 2. Create "No Results Found" Message
    const noResultsMsg = document.createElement('div');
    noResultsMsg.textContent = 'No clubs found matching your search.';
    noResultsMsg.style.cssText = "text-align: center; color: #718096; font-size: 16px; margin: 30px 0; display: none; font-weight: 500;";
    clubsContainer.appendChild(noResultsMsg);

    // Search Logic Function
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        // Toggle clear button visibility
        clearBtn.style.display = searchTerm ? 'block' : 'none';

        clubCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardClasses = card.className.toLowerCase();
            const isMatch = cardText.includes(searchTerm) || cardClasses.includes(searchTerm);

            if (isMatch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Toggle "No Results" message
        noResultsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
    }

    // Event Listeners
    searchInput.addEventListener('input', performSearch);

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        performSearch();
        searchInput.focus();
    });
});