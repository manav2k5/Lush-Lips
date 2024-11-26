// For example, adding a simple product hover effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});