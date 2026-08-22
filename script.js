document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchBar');
    const clubCards = document.querySelectorAll('.club-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        clubCards.forEach(card => {
            // Get all text content inside the card (e.g., club titles or descriptions)
            const cardText = card.textContent.toLowerCase();
            // Get the class names of the card (e.g., "club-card math-club")
            const cardClasses = card.className.toLowerCase();

            // Check if search query matches either the card's text or its classes
            const isMatch = cardText.includes(searchTerm) || cardClasses.includes(searchTerm);

            // Show or hide the card based on match status
            if (isMatch) {
                card.style.display = ''; // Resets to default CSS display (flex/list-item)
            } else {
                card.style.display = 'none'; // Hides unmatched cards
            }
        });
    });
});