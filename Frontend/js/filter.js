const filterBtn = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtn.forEach(function(btn) {
    btn.addEventListener('click',function() {
        const filterValue = btn.dataset.filter;

        projectCards.forEach(function(card) {
            if(filterValue === 'all' || card.dataset.category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});