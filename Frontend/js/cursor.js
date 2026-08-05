const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});