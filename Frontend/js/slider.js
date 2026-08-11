const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(function(card) {
    card.classList.remove('active');
  });
  testimonials[index].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});