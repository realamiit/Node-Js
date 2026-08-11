const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

revealElements.forEach(function(el) {
  observer.observe(el);
});


const skillBars = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const percent = entry.target.dataset.percent;
      entry.target.style.width = percent + "%";
    }
  });
});

skillBars.forEach(function(bar) {
  skillObserver.observe(bar);
});