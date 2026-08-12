async function getGithubData() {
  const response = await fetch('https://github-contributions-api.jogruber.de/v4/realamiit');
  const data = await response.json();

  const grid = document.getElementById('contributions-grid');

  data.contributions.forEach(function(day) {
    const box = document.createElement('div');
    box.classList.add('contribution-box');
    box.classList.add('level-' + day.level);
    box.title = day.date + ': ' + day.count + ' contributions';
    grid.appendChild(box);
  });
}

getGithubData();